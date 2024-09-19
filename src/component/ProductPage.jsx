import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';

const ProductPage = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  // بيانات المنتج
  const product = {
    id: 1,
    Brand: "Nike",
    name: "Nike Air Force 1 High (GS) Black 653998-001 Black (4.5 M US Big Kid)",
    price: 350,
    discount: 20, // نسبة الخصم
    description: 'حذاء مريح وأنيق لجميع الاستخدامات اليومية',
    sizes: ['S', 'M', 'L', 'XL'], // المقاسات
    colors: ['gray', 'black', '#3357FF'], // الألوان
    mainImage: 'https://th.bing.com/th/id/OIP.tItJSXvvNIV7SI9p8K4mCAHaE8?rs=1&pid=ImgDetMain', // صورة رئيسية
    images: [
      'https://www.favsole.com/images/2018/09/Nike-Air-Force-1-High-07-All-White-315121-115-To-Buy.jpeg',
      'https://cdna.lystit.com/photos/2013/11/27/nike-black-air-force-1-downtown-hi-spike-product-1-15357682-558491265.jpeg',
      'https://th.bing.com/th/id/OIP.7JKlXe66tCO07LL7dGqGlwHaHB?w=1484&h=1408&rs=1&pid=ImgDetMain',
    ], // صور متعددة
  };

  // حساب السعر القديم
  const discountAmount = (product.price * product.discount) / 100; // حساب قيمة الخصم
  const oldPrice = product.price + discountAmount; // السعر القديم

  // هوك لإظهار رسالة تشجيعية
  useEffect(() => {
    const messages = [
      'احصل على أفضل جودة بأقل سعر!',
      'مريح جداً للاستخدام اليومي - لا تفوت الفرصة!',
      'الكمية محدودة، سارع بالشراء الآن!',
    ];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    setMessage(randomMessage);
  }, []);

  const handleBuyNow = () => {
    if (!selectedSize || !selectedColor) {
      alert('يرجى اختيار المقاس واللون قبل الشراء.');
      return;
    }

    navigate('/order', {
      state: {
        product: {
          ...product,
          selectedSize,
          selectedColor,
        },
      },
    });
  };

  // إعدادات السلايدر
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-lg mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <img
          src={product.mainImage}
          alt={product.name}
          className="w-full md:w-1/2 h-auto object-cover rounded-lg"
        />

        <div className="w-full md:w-1/2 pl-4">
          <h2 className="text-md font-bold mb-2 text-gray-400">Brand: {product.Brand}</h2>
          <h2 className="text-2xl font-bold mb-2 text-gray-800">{product.name}</h2>
          {product.discount && (
            <div className='flex gap-8'>

            <p className="text-lg mb-2 line-through text-gray-500">
              السعر القديم: <span className="font-semibold">{oldPrice} جنيه</span>
            </p>

            {product.discount && (
            <p className="text-red-600 mb-2">
              Discount :<span className="font-semibold"> {product.discount}%</span>
            </p>
          )}
            </div>

          )}
          <p className="text-lg mb-2">
            السعر الحالي: <span className="font-semibold">{product.price} جنيه</span>
          </p>

          <p className="text-gray-700 mb-4">{product.description}</p>

          {/* إضافة المقاسات */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">المقاسات المتاحة:</h3>
            <select
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              className="border border-gray-300 rounded p-2 w-full"
            >
              <option value="">اختر المقاس</option>
              {product.sizes.map((size, index) => (
                <option key={index} value={size}>{size}</option>
              ))}
            </select>
          </div>

          {/* إضافة الألوان */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">الألوان المتاحة:</h3>
            <div className="flex space-x-2">
              {product.colors.map((color, index) => (
                <div
                  key={index}
                  className={`w-8 h-8 rounded-full cursor-pointer ${selectedColor === color ? 'border-2 border-black' : ''}`}
                  style={{ backgroundColor: color }}
                  onClick={() => setSelectedColor(color)}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* رسالة التشجيع */}
      <div className="bg-yellow-100 p-4 mb-6 rounded text-yellow-700 font-semibold">
        {message}
      </div>

      {/* زر الشراء */}
      <button
        onClick={handleBuyNow}
        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mb-8"
      >
        شراء المنتج
      </button>

      {/* سلايدر الصور */}
      <div className="mt-6">
        <Slider {...settings}>
          {product.images.map((image, index) => (
            <div key={index} className="px-2">
              <img
                src={image}
                alt={`product-${index}`}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductPage;

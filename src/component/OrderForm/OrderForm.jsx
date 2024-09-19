import { useLocation } from 'react-router-dom';
import { useForm, ValidationError } from '@formspree/react';

function OrderForm() {
  const location = useLocation();
  const data = location.state;
  const [state, handleSubmit] = useForm("xeojbozk");

  const submitForm = (e) => {
    e.preventDefault(); // منع الإرسال الافتراضي للنموذج

    const formData = {
      name: e.target.name.value,
      phone: e.target.phone.value,
      address: e.target.address.value,
      productName: data.product.name,
      productPrice: data.product.price,
      productSize: data.product.selectedSize, // استخدام الحجم من بيانات المنتج
      productColor: data.product.selectedColor, // استخدام اللون من بيانات المنتج
    };

    handleSubmit(formData); // إرسال البيانات المعدلة
  };



  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-6">طلب {data.product.name}</h2>
      <div className='flex items-center justify-around'>
        <p className="text-lg mb-2">السعر: {data.product.price} جنيه</p>
        <p className="text-lg mb-2">المقاس: {data.product.selectedSize}</p>
        <p className="text-lg mb-4 flex items-center gap-2">
          اللون: <span className="w-5 h-5 inline-block rounded-full" style={{ backgroundColor: data.product.selectedColor }}></span>
        </p>
      </div>
      <form onSubmit={submitForm} className="space-y-4">
        {/* الاسم */}
        <div>
          <label htmlFor="name" className="block text-sm mb-2 font-medium text-gray-700">الاسم</label>
          <input
            id="name"
            type="text"
            name="name"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded"
            placeholder="اسمك"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>

        {/* رقم الهاتف */}
        <div>
          <label htmlFor="phone" className="block text-sm mb-2 font-medium text-gray-700">رقم الهاتف</label>
          <input
            id="phone"
            type="tel"
            name="phone"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded"
            placeholder="رقم هاتفك"
          />
          <ValidationError prefix="Phone" field="phone" errors={state.errors} />
        </div>

        {/* العنوان */}
        <div>
          <label htmlFor="address" className="block text-sm mb-2 font-medium text-gray-700">العنوان</label>
          <input
            id="address"
            type="text"
            name="address"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded"
            placeholder="عنوانك"
          />
          <ValidationError prefix="Address" field="address" errors={state.errors} />
        </div>

        {/* زر الإرسال */}
        <button
          type="submit"
          disabled={state.submitting}
          className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
        >
          إرسال الطلب
        </button>
        {state.succeeded ?  " تم ارسال الطلب بنجاح": "" }

      </form>
    </div>
  );
}

export default OrderForm;

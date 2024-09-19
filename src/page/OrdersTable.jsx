import React, { useEffect, useState } from 'react';

const OrdersTable = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const response = await fetch('https://landing-page-backend-three.vercel.app/api/orders');
      const data = await response.json();
      setOrders(data);
    };

    fetchOrders();
  }, []);

  return (
    <div className="max-w-full mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-6">قائمة الطلبات</h2>
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">الاسم</th>
            <th className="px-4 py-2">رقم الهاتف</th>
            <th className="px-4 py-2">العنوان</th>
            <th className="px-4 py-2">اسم المنتج</th>
            <th className="px-4 py-2">السعر</th>
            <th className="px-4 py-2">المقاس</th>
            <th className="px-4 py-2">اللون</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{order.name}</td>
              <td className="border px-4 py-2">{order.phone}</td>
              <td className="border px-4 py-2">{order.address}</td>
              <td className="border px-4 py-2">{order.productName}</td>
              <td className="border px-4 py-2">{order.productPrice}</td>
              <td className="border px-4 py-2">{order.productSize}</td>
              <td className="border px-4 py-2">{order.productColor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersTable;

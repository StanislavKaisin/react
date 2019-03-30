import React from 'react';

import orderHistoryData from '../../Data/order-history.json';

const OrderHistory = () => {
  // console.log('inside OrderHistory');
  // console.log('orderHistoryData =', orderHistoryData);
  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Price</th>
          <th>Delivery address</th>
          <th>Rating</th>
        </tr>
      </thead>
      <tbody>
        {orderHistoryData.map(({ id, date, price, address, rating }) => {
          return (
            <tr key={id}>
              <td>{date}</td>
              <td>{price}</td>
              <td>{address}</td>
              <td>{rating}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default OrderHistory;

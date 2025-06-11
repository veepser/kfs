const API_URL = 'http://localhost:3001';

// Используем fetch для работы с API
export const getProducts = async () => {
  const response = await fetch(`${API_URL}/products`);
  return await response.json();
};

export const validateCoupon = async (code) => {
  const response = await fetch(`${API_URL}/coupons?code=${code}`);
  const data = await response.json();
  return data[0] || null;
};

export const createOrder = async (orderData) => {
  const response = await fetch(`${API_URL}/orders`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(orderData)
  });
  return await response.json();
};
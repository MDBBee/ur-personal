export const calcTotals = (cartMap) => {
  const { cart } = cartMap;
  let totalItems = 0;
  let totalCost = 0;
  cart.forEach((item) => {
    const { amount, price } = item;

    totalItems += amount;
    totalCost += amount * price;
  });

  return { totalItems, totalCost: currency(totalCost) };
};

const currency = (amount) => {
  return new Intl.NumberFormat('fi-FI', {
    style: 'currency',
    currency: 'EUR',
  }).format(amount);
};

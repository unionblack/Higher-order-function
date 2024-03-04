
const sales = [{product: 'Телефон', price: 50000, quantity: 1}, {product: 'Чехол', price: 1500, quantity: 2}, {product: 'Зарядное устройство', price: 2500, quantity: 1}]

const money = sales.reduce((accumulator, currentValue) => accumulator + currentValue.price, initialValue = 0);
console.log(money);
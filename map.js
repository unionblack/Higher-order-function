

const users = [{name: 'Иван', age: 23}, {name: 'Мария', age: 18}, {name: 'Алексей', age: 32}, {name: 'Ольга', age: 24}, {name: 'Сергей', age: 17}, {name: 'Анна', age: 21}];

const oldUsers = users.filter(item => item.age > 18);
const oldUsersFinal = oldUsers.map((user) => (`${user.name} (${user.age} лет)`));

console.log(oldUsersFinal);
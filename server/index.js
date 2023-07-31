const { faker } = require('@faker-js/faker');
let database = { birthdayPerson: [] };
const threshold = 4;

for (let i = 1; i <= threshold; i++) {
  database.birthdayPerson.push({
    name: faker.person.fullName(),
    date: faker.number.int({ min: 1, max: 31 }),
    month: faker.date.month(),
    message: faker.datatype.boolean(),
    gift1: faker.datatype.boolean(),
    id: i
  });
  
}

console.log(JSON.stringify(database));

'use strict';

const faker = require('faker');

module.exports = {
  up: function (queryInterface, Sequelize) {
    const today = new Date().toDateString();
    let entries = [];
    for (let i = 0; i < 100; i++) {
      const entry = {
        id: i,
        name: faker.name.firstName(),
        email: faker.internet.email(),
        address: faker.address.streetAddress(),
        phone: faker.phone.phoneNumber().toString(),
        country: faker.address.country(),
        comments: faker.lorem.sentence(10),
        createdAt: today,
        updatedAt: today
      }
      entries.push(entry);
    }

    return queryInterface.bulkInsert('entries', entries, {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('entries', null, {});
  }
};

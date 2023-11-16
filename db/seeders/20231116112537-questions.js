'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Questions", [
      {
        name: "Арбуз - это фрукт или ягода?",
        img: "https://hips.hearstapps.com/hmg-prod/images/fresh-ripe-watermelon-slices-on-wooden-table-royalty-free-image-1684966820.jpg?crop=1.00xw:0.751xh;0,0.194xh&resize=1200:*",
        answer: "Ягода",
        themeId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Банан желтый?",
        img: "https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy9wcm9kdWN0cy8xMjQ4OS9jb3ZlcnMvVFR5U0xWLmpwZWc.jpg",
        answer: "Да",
        themeId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "У кота 4 лапы?",
        img: "https://cdnn1.ukraina.ru/img/07e6/0c/02/1041436899_0:206:2905:1840_1920x0_80_0_0_c7022893b761781d76fe592010d14bd2.jpg",
        answer: "Да",
        themeId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "У собаки 4 лапы?",
        img: "https://skazochka.online/wp-content/uploads/2021/10/pexels-pixabay-235805.jpg",
        answer: "Да",
        themeId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Сколько игроков на поле?",
        img: "https://pl.vgorode.ua/img/forall/u/1530/18/futbol_pole_gazon_trava_liniya_261.jpg",
        answer: "22",
        themeId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Кто такой Шакил О’Нил?",
        img: "https://s-cdn.sportbox.ru/images/styles/upload/fp_fotos/96/c2/23594ef6df9c8124f43075b5caf6a80355c0b331ef918405145282.jpg",
        answer: "Баскетболист",
        themeId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Questions', null, {});
  }
};

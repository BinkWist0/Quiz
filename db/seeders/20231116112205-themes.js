/* eslint-disable no-unused-vars */
"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Themes", [
      {
        name: "Путешествие по России",
        img: "https://i0.wp.com/pchela.tv/wp-content/uploads/2014/03/24241.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Животные",
        img: "https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/Animal_kingdom_nzwbda.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Машины",
        img: "https://avatars.mds.yandex.net/get-vertis-journal/3934100/2021-01-19-2c5996d983f64716bbd554e321b49db8.jpg_1622737068729/orig",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Themes", null, {});
  },
};

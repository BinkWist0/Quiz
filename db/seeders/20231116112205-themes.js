"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Themes", [
      {
        name: "Еда",
        img: "https://broniboy.ru/_next/image?url=https%3A%2F%2Fimages.broniboy.ru%2FXiQ4pUZcfNJIIhvhngcn5zF74-I%3D%2F600x0%2Fsmart%2Ffilters%3Asmart_sharpen()%3Aallow_webp(false)%2Fown%2Fe7d03564-98d7-49d9-abdf-553de1f2a53b%2F8321178793ae72f8c20f1042a453e084.jpg&w=3840&q=90",
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
        name: "Спорт",
        img: "https://img.freepik.com/free-photo/sports-tools_53876-138077.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1697932800&semt=sph",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Themes', null, {});
  },
};

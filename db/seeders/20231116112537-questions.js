'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Questions", [
      {
        name: "Где находится Телецкое озеро?",
        img: "https://goldaltai.ru/wp-content/uploads/2019/10/%D0%A2%D0%B5%D0%BB%D0%B5%D1%86%D0%BA%D0%BE%D0%B5-%D0%BE%D0%B7%D0%B5%D1%80%D0%BE.jpg",
        answer: "Алтай",
        themeId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Сколько часовых поясов в России?",
        img: "https://www.fonstola.ru/images/201504/fonstola.ru_176401.jpg",
        answer: "11",
        themeId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Сколько рек вытекает из озера Байкал?",
        img: "https://cdn.recyclemag.ru/main/d/dc271263e154acae403752b1b6dad8c9_photo.jpg",
        answer: "1",
        themeId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Столицей какой республики является город Кызыл?",
        img: "https://ресбольница.рф/wp-content/uploads/2020/09/3.jpg",
        answer: "Тыва",
        themeId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "В каком регионе находится горнолыжный курорт Шерегеш?",
        img: "https://static.aviasales.com/p-static/ru/uploads/2023/09/%D0%97%D0%B0%D0%BA%D0%B0%D1%82-%D0%B2-%D0%A8%D0%B5%D1%80%D0%B5%D0%B3%D0%B5%D1%88%D0%B5.jpg",
        answer: "Кемеровская область",
        themeId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Какого цвета пот бегемота?",
        img: "https://kartinki.pibig.info/uploads/posts/2023-08/1692365352_kartinki-pibig-info-p-kartinka-begemot-iz-multfilma-vkontakte-34.jpg",
        answer: "Розовый",
        themeId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "У какого животного прямоугольные зрачки?",
        img: "https://static.dw.com/image/18463014_702.jpg",
        answer: "Коза",
        themeId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Какое водное животное самое ядовитое в мире?",
        img: "https://content.onliner.by/news/1100x5616/3a1d503ba0752b13545ac7393dc82304.jpg",
        answer: "рыба-фугу",
        themeId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "В каком единственном месте на теле собаки находится потовые железы?",
        img: "https://cdn1.ozonusercontent.com/s3/club-storage/images/article_image_752x940/697/c500/e5d7e52e-ab4d-4d1b-80fe-15e99ffbf6b6.jpeg",
        answer: "Лапы",
        themeId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Где морские выдры хранят на своем теле заначку еды?",
        img: "https://cdn.fishki.net/upload/post/201411/25/1333609/4633a2d76a4b3196735e4e42abcdf905.jpg",
        answer: "Подмышки",
        themeId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Какой известный автомобиль был выпущен в 1964 году и стал одной из самых популярных икон в мире автомобилей?",
        img: "https://99px.ru/sstorage/56/2013/07/image_562907132229079077451.jpg",
        answer: "Форд Мустанг",
        themeId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Прототипом какого автомобиля является ВАЗ-2101(копейка)?",
        img: "https://avatars.dzeninfra.ru/get-zen_doc/119173/pub_5d388976f8a62300ad7191bb_5d389471c0dcf200ad8e350b/scale_1200",
        answer: "Фиат",
        themeId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Какой автомобильный бренд является самым популярным и продаваемым в мире?",
        img: "https://cs8.pikabu.ru/post_img/big/2016/04/16/11/1460834370149323526.jpg",
        answer: "Тойота",
        themeId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Какой самый быстрый электромобиль в мире?",
        img: "https://gorelov.su/wp-content/uploads/2018/09/755382590691371.jpeg",
        answer: "Римак Невера",
        themeId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Какой самый быстрый автомобиль в мире?",
        img: "https://hdpic.club/uploads/posts/2021-12/1640157885_29-hdpic-club-p-bmv-obognala-samolet-foto-44.jpg",
        answer: "Бугати Чирон",
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

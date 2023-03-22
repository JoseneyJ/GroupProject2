const { Product } = require("../models");

const productData = [
  {
    product_name: "Mixed Aeonium",
    price: 16.49,
    stock: 14,
    category_id: 1,
  },
  {
    product_name: "White strawberry",
    price: 17.0,
    stock: 25,
    category_id: 2,
  },
  {
    product_name: "Pink Crown Cactus",
    price: 16.99,
    stock: 12,
    category_id: 1,
  },
  {
    product_name: "English Lavender",
    price: 20.99,
    stock: 50,
    category_id: 2,
  },
  {
    product_name: "Bamboo Palm",
    price: 75.99,
    stock: 22,
    category_id: 2,
  },
  {
    product_name: "Ugandan Aloe",
    price: 17.99,
    stock: 2,
    category_id: 2,
  },
  {
    product_name: "African violet with pink flowers",
    price: 3.99,
    stock: 75,
    category_id: 1,
  },
  {
    product_name: "Contortion succulent",
    price: 22.99,
    stock: 15,
    category_id: 1,
  },
  {
    product_name: "Red Angel Trumpet",
    price: 15.0,
    stock: 7,
    category_id: 2,
  },
  {
    product_name: "Ruby Red Kiwi",
    price: 29.99,
    stock: 22,
    category_id: 2,
  },
  {
    product_name: "Claret Sunflower",
    price: 100.0,
    stock: 10,
    category_id: 2,
  },
  {
    product_name: "Rainbow Eucalyptus",
    price: 49.99,
    stock: 5,
    category_id: 2,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;

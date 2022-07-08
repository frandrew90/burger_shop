const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const User = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: "USER" },
});

const Cart = sequelize.define("cart", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const CartFood = sequelize.define("cart_food", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const Food = sequelize.define("food", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  price: { type: DataTypes.INTEGER, allowNull: false },
  raiting: { type: DataTypes.INTEGER, defaultValue: 0 },
  img: { type: DataTypes.STRING, allowNull: false },
});

const Type = sequelize.define("type", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const Shop = sequelize.define("shop", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const Rating = sequelize.define("rating", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  rate: { type: DataTypes.INTEGER, allowNull: false },
});

const FoodInfo = sequelize.define("food_info", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
});

const TypeShop = sequelize.define("type_shop", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

User.hasOne(Cart);
Cart.belongsTo(User);

User.hasMany(Rating);
Rating.belongsTo(User);

Cart.hasMany(CartFood);
CartFood.belongsTo(Cart);

Type.hasMany(Food);
Food.belongsTo(Type);

Shop.hasMany(Food);
Food.belongsTo(Shop);

Food.hasMany(Rating);
Rating.belongsTo(Food);

Food.hasMany(CartFood);
CartFood.belongsTo(Food);

Food.hasMany(FoodInfo);
FoodInfo.belongsTo(Food);

Type.belongsToMany(Shop, { through: TypeShop });
Shop.belongsToMany(Type, { through: TypeShop });

module.exports = {
  User,
  Cart,
  CartFood,
  Food,
  Type,
  Shop,
  Rating,
  FoodInfo,
  TypeShop,
};

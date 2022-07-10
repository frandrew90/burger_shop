// import { makeAutoObservable } from "mobx";
import { makeAutoObservable } from "mobx";

export default class FoodStore {
  constructor() {
    this._types = [
      {
        id: 1,
        name: "Burgers",
      },
      {
        id: 2,
        name: "Salads",
      },
      {
        id: 3,
        name: "Desserts",
      },
      {
        id: 4,
        name: "IceCream",
      },
    ];

    this._shops = [
      {
        id: 1,
        name: "Mcdonalds",
      },
      {
        id: 2,
        name: "Kfc",
      },
      {
        id: 3,
        name: "Salateria",
      },
      {
        id: 4,
        name: "BurgerKing",
      },
    ];
    this._foods = [
      {
        id: 1,
        name: "bigmc",
        price: 100,
        raiting: 0,
        img: "https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Smash-Burgers_EXPS_TOHcom20_246232_B10_06_10b.jpg",
        createdAt: "2022-07-08T14:23:33.433Z",
        updatedAt: "2022-07-08T14:23:33.433Z",
        typeId: null,
        shopId: null,
      },
      {
        id: 2,
        name: "bigmac",
        price: 100,
        raiting: 0,
        img: "https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Smash-Burgers_EXPS_TOHcom20_246232_B10_06_10b.jpg",
        createdAt: "2022-07-08T14:24:51.830Z",
        updatedAt: "2022-07-08T14:24:51.830Z",
        typeId: 1,
        shopId: 1,
      },
      {
        id: 3,
        name: "zingerburger",
        price: 99,
        raiting: 0,
        img: "https://www.kfc-ukraine.com/admin/files/medium/medium_4064.jpg",
        createdAt: "2022-07-08T15:03:18.324Z",
        updatedAt: "2022-07-08T15:03:18.324Z",
        typeId: 1,
        shopId: 2,
      },
      {
        id: 4,
        name: "mcsalad",
        price: 51,
        raiting: 0,
        img: "https://www.fastfoodcalories.com/wp-content/uploads/2019/05/McDonalds-Premium-Southwest-Salad.jpg",
        createdAt: "2022-07-08T15:05:33.852Z",
        updatedAt: "2022-07-08T15:05:33.852Z",
        typeId: 2,
        shopId: 1,
      },
    ];

    this._selectedType = {};

    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }

  setShops(shops) {
    this._shops = shops;
  }

  setFoods(foods) {
    this._foods = foods;
  }

  setSelectedType(type) {
    this._selectedType = type;
  }

  get types() {
    return this._types;
  }

  get shops() {
    return this._shops;
  }
  get foods() {
    return this._foods;
  }

  get SelectedType() {
    return this._selectedType;
  }
}

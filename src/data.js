import menuImage1 from "./assets/images/p10.jpg";
import menuImage2 from "./assets/images/p2.jpg";
import menuImage3 from "./assets/images/p3.jpg";
import menuImage4 from "./assets/images/p4.jpg";
import menuImage5 from "./assets/images/p5.jpg";
import menuImage6 from "./assets/images/p6.jpg";
import menuImage7 from "./assets/images/p7.jpg";
import menuImage8 from "./assets/images/p8.jpg";
import menuImage9 from "./assets/images/p9.jpg";

const products = [
  {
    id: "menu_1",
    price: "20.89",
    name: "Banana bread",
    cookingTime: "10",
    isPopular: true,
    categories: ["Autumn", "Dairy Free", "Egg Free", "Dessert", "Ice Cream and Popsicles"],
    img: menuImage1,
  },
  {
    id: "menu_2",
    price: "10.50",
    name: "Vegies Salad",
    cookingTime: "45",
    isPopular: false,
    categories: ["Autumn", "Egg Free", "Dinner", "Fruit Desserts"],
    img: menuImage2,
  },
  {
    id: "menu_3",
    price: "40.00",
    name: "Mushroom Tomato",
    cookingTime: "45",
    isPopular: true,
    categories: ["Autumn", "Spring", "Egg Free", "Gluten Free", "Dessert", "Pies and Tarts"],
    img: menuImage3,
  },
  {
    id: "menu_4",
    price: "35.67",
    name: "Chicken Burger",
    cookingTime: "15",
    categories: ["Autumn", "Dairy Free", "Egg Free", "Snacks and Appetizers", "Fruit Desserts"],
    isPopular: false,

    img: menuImage4,
  },
  {
    id: "menu_5",
    price: "24.45",
    name: "Egg Noodles",
    cookingTime: "30",
    isPopular: false,
    categories: ["Autumn", "Summer", "Egg Free", "Gluten Free", "Dessert", "Pies and Tarts"],
    img: menuImage5,
  },
  {
    id: "menu_6",
    price: "15.13",
    name: "Chicken Tandori",
    cookingTime: "50",
    isPopular: false,
    categories: ["Autumn", "Winter", "Egg Free", "Dessert", "Pies and Tarts"],
    img: menuImage6,
  },
  {
    id: "menu_7",
    price: "40.00",
    cookingTime: "30",
    name: "Cheese Burger",
    isPopular: true,
    categories: ["Autumn", "Spring", "Egg Free", "Healthy", "Holidays", "Fruit Desserts"],
    img: menuImage7,
  },
  {
    id: "menu_8",
    price: "35.67",
    name: "Mushroom Salad",
    cookingTime: "20",
    isPopular: false,
    categories: ["Autumn", "Summer", "Egg Free", "Gluten Free", "Dessert", "Cookies and Bars"],
    img: menuImage8,
  },
  {
    id: "menu_9",
    price: "24.45",
    name: "Chicken Kabab",
    cookingTime: "30",
    isPopular: false,
    categories: ["Autumn", "Egg Free", "Breakfast", "Cakes and Quick Breads"],
    img: menuImage9,
  }
];

const season = ["Autumn", "Spring", "Summer", "Winter"];

const dietaryPreference = ["Dairy Free", "Egg Free", "Gluten Free", "Healthy", "Quick and Easy"];

const meal = ["Breakfast", "Dessert", "Dinner", "Holidays", "Snacks and Appetizers"]

const sweetThings = ["Fruit Desserts", "Chocolate", "Cakes and Quick Breads", "Cookies and Bars", "Pies and Tarts", "Ice Cream and Popsicles"]

const users = [
  {
    username: "user1",
    password: "pass1"
  },
  {
    username: "user2",
    password: "pass2"
  }
];

export { products , season, dietaryPreference, meal, sweetThings, users };

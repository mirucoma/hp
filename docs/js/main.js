import van from "https://cdn.jsdelivr.net/gh/vanjs-org/van/public/van-1.2.3.min.js";
import { NewsList } from "./news.js";
import { loop } from "./loop.js";
import { menu } from "./menu.js";

// Render the news list
const newsListRoot = document.getElementById("news-list-root");

if (newsListRoot) {
  van.add(newsListRoot, await NewsList());
}

// Apply the loop functionality if 'customer_voices' element exists
const customerVoicesElement = document.getElementById("customer_voices");

if (customerVoicesElement) {
  setTimeout(() => loop(customerVoicesElement), 8000);
}

// Apply the menu
const menuTrigger = document.getElementById("menu_trigger");
const navSp = document.getElementById("nav_sp");

if (menuTrigger && navSp) {
  menu(menuTrigger, navSp);
}

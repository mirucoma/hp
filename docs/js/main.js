import van from "https://cdn.jsdelivr.net/gh/vanjs-org/van/public/van-1.2.3.min.js";

import { NewsList } from "./news.js";
import { loop } from "./loop.js";
import { menu } from "./menu.js";

// Render the news list
van.add(document.getElementById("news-list-root"), await NewsList());

// Apply the loop
loop(document.getElementById("customer_voices"));

// Apply the menu
menu(
  document.getElementById("menu_trigger"),
  document.getElementById("nav_sp")
);

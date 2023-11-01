import van from "https://cdn.jsdelivr.net/gh/vanjs-org/van/public/van-1.2.3.min.js";

import { NewsList } from "./news.js";

van.add(document.getElementById("news-list-root"), await NewsList());

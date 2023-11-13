import van from "https://cdn.jsdelivr.net/gh/vanjs-org/van/public/van-1.2.3.min.js";

import { getNews } from "./fetch-news.js";

const format = (date) => {
  const dateObj = new Date(date);
  const yyyy = dateObj.getFullYear();
  const mm = dateObj.getMonth() + 1;
  const dd = dateObj.getDate();
  return `${yyyy}年${mm}月${dd}日`;
};

const NEWS_URL =
  "https://bzo3et1tzb.execute-api.ap-northeast-1.amazonaws.com/default/mirucoma-notion";

function NewsItem(props) {
  const { date, title, url } = props;
  const formattedDate = format(date);

  return van.tags.li([
    van.tags.a(
      {
        href: url,
        target: "_blank",
        rel: "noopener noreferrer",
      },
      [
        van.tags.span(
          formattedDate,
          van.tags.img({
            src: "./assets/Image/Frame.png",
            alt: "",
          })
        ),
        title,
      ]
    ),
  ]);
}

export async function NewsList() {
  try {
    const news = await getNews(NEWS_URL);

    return van.tags.ul(
      { class: "news-list" },
      news.map((news) => {
        return NewsItem(news);
      })
    );
  } catch (e) {
    console.error(e);
    return null;
  }
}

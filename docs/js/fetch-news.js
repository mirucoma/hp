const fetchOptions = {
  method: "POST",
  headers: {
    "Content-Type": "text/plain",
  },
  // mode:	'no-cors',
  body: JSON.stringify({
    sorts: [{ property: "日付", direction: "descending" }],
    page_size: 5,
  }),
};

/**
 * Fetches news from the provided URL.
 * @param {string} url - The URL to fetch the news from.
 * @returns {Promise<object>} - A promise that resolves to the fetched news data.
 */
export const getNews = async (url, mock = false) => {
  if (mock) {
    return JSON.parse(
      '[{"id":"99cfa5c1-6157-4f8e-b2c5-b96b3f8ac4c7","category":{"id":"1c66821b-245d-42e8-adfc-0553a0d19ea2","name":"アップデート","color":"green"},"title":"Ver 2.12.0 アップデート情報","date":"2023-10-11","url":"https://www.notion.so/mirucoma/99cfa5c161574f8eb2c5b96b3f8ac4c7"},{"id":"15433a84-8dee-440f-88af-04f9770e8064","category":{"id":"1c66821b-245d-42e8-adfc-0553a0d19ea2","name":"アップデート","color":"green"},"title":"Ver 2.11.0 アップデート情報","date":"2023-08-29","url":"https://www.notion.so/mirucoma/15433a848dee440f88af04f9770e8064"},{"id":"72211f69-3416-4265-8b76-36067b61edcd","category":{"id":"1c66821b-245d-42e8-adfc-0553a0d19ea2","name":"アップデート","color":"green"},"title":"Ver 2.10.0 アップデート情報","date":"2023-08-09","url":"https://www.notion.so/mirucoma/72211f69341642658b7636067b61edcd"},{"id":"32f304c7-565c-433b-8e2b-a7e087e8ffb6","category":{"id":"1c66821b-245d-42e8-adfc-0553a0d19ea2","name":"アップデート","color":"green"},"title":"Ver 2.x.x マイナーアップデート情報","date":"2023-06-08T12:00:00.000+09:00","url":"https://www.notion.so/mirucoma/32f304c7565c433b8e2ba7e087e8ffb6"},{"id":"8156c795-b2a0-48e9-8890-f91ae2028993","category":{"id":"1c66821b-245d-42e8-adfc-0553a0d19ea2","name":"アップデート","color":"green"},"title":"Ver 2.9.0 アップデート情報","date":"2023-06-05","url":"https://www.notion.so/mirucoma/8156c795b2a048e98890f91ae2028993"}]'
    );
  }

  const response = await fetch(url, fetchOptions);
  const data = await response.json();
  return data;
};

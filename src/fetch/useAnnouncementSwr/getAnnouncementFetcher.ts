import axios from "axios"


type announcements = {
  date: string
  title: string
  url: string
}[]

export const getAnnouncementFetcher = async(url: string) => {
  const responce = await axios({
    method: "POST",
    url: url,
    data: {
      sorts: [{ property: "日付", direction: "descending" }],
      page_size: 5,
    },
    headers: {
      "Content-Type": "text/plain",
    },
  })
  let result: announcements = []
  await responce.data.map((data: any) => {
    result.push({
      date: data.date,
      title: data.title,
      url: data.url,
    })
  })
  return result;
}
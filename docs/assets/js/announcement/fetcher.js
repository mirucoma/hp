const fetchOptions = {
  method: 'POST',
  headers: {
    "Content-Type": "text/plain",
  },
  // mode:	'no-cors',
  body: JSON.stringify({ sorts: [{ property: "日付", direction: "descending" }], page_size: 5 })
}
const getAnnouncements = async (url) => {
  const response = await fetch(url, fetchOptions)
  const data = await response.json()
  return data
}
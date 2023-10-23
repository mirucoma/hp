const builds = async () => {
  const announcementWrapper = document.getElementById('announcement-wrapper')
  const announcements = await getAnnouncements('https://bzo3et1tzb.execute-api.ap-northeast-1.amazonaws.com/default/mirucoma-notion')
  announcements.forEach(announcement => {
    const anAnnouncement = new Announcement(announcement.date, announcement.title, announcement.url)
    announcementWrapper.appendChild(anAnnouncement.createDom())
  })
}

builds()
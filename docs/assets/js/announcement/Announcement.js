
class Announcement {
  constructor(date, title, url) {
    this.date = new Date(date).toLocaleDateString()
    this.title = title
    this.url = url
  }

  createDom() {
    const li = document.createElement('li')
    li.classList.add('item')

    const a = document.createElement('a')
    a.href = this.url
    a.target = "_blank"
    a.rel = "noopener noreferrer"

    const date = document.createElement('p')
    date.classList.add('date')
    date.textContent = this.date

    const dateImgWrap = document.createElement('span')
    dateImgWrap.classList.add('date_img')
    const dateImg = document.createElement('img')
    dateImg.src = './assets/Image/Frame.png'
    dateImg.alt = ''
    dateImgWrap.appendChild(dateImg)
    date.appendChild(dateImgWrap)

    const title = document.createElement('p')
    title.classList.add('title')
    title.textContent = this.title

    a.appendChild(date)
    a.appendChild(title)
    li.appendChild(a)

    return li
  }
}

const getInputValue = (id) => {
  return document.getElementById(id).value
}

const showEndSend = () => {
  const form = document.getElementById('consultation_form')
  form.onsubmit = () => {
    return false
  }

  const submitButton = document.getElementById('consultation_submit_button')
  submitButton.style.backgroundColor = '#e0e0e0'
  submitButton.style.color = '#bdbdbd'
  submitButton.value = '送信完了しました'
}

const EMAIL_FIELD_ID = 'emailAddress'
const SCHOOL_NAME_FIELD_ID = 'entry.469789797'
const DATE_FIELD_ID = 'entry.1515737950'

const sendGoogleForm = () => {
  const email = getInputValue('email')
  const schoolName = getInputValue('schoolName')
  const date = getInputValue('date')

  const formData = new FormData()

  formData.append(EMAIL_FIELD_ID, email)
  formData.append(SCHOOL_NAME_FIELD_ID, schoolName)
  formData.append(DATE_FIELD_ID, date)

  fetch('https://docs.google.com/forms/u/0/d/e/1FAIpQLSfYGwBGeaoBnwpg9g64M7nVD5HbDvtL3abVbRlg24FHItTP3Q/formResponse', {
    method: 'POST',
    body: formData
  })

  showEndSend()
}
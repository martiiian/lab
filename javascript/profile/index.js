window.addEventListener('load', () => {
  document.getElementsByClassName('biba')[0].addEventListener('click', () => {
    let i = 0
    const interval = setInterval(() => {
      if (i > 10) {
        clearInterval(interval)
        return
      }
      const $text = document.getElementById('text')
      $text.innerText += i + 'olol'
      i++
    }, 300)
  })
})
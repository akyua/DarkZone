let trending = [0, 1]
trending[0] = document.getElementById('trending1')
trending[1] = document.getElementById('trending2')


trending[0].addEventListener('click', () => {
    let trending1 = './pages/gentoo.html'
    window.location = trending1
  })


trending[1].addEventListener('click', () => {
    let trending2 = './pages/html.html'
    window.location = trending2
})

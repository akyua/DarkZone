let lista = [0, 1, 2 , 3]
lista[0] = document.getElementById('gentoo')
lista[1] = document.getElementById('html')
lista[2] = document.getElementById('arch')
lista[3] = document.getElementById('css')

lista[0].addEventListener('click', () => {
    let gentoo = './pages/gentoo.html'
    window.location = gentoo
  })


  lista[1].addEventListener('click', () => {
    let html = './pages/html.html'
    window.location = html
  })


  lista[2].addEventListener('click', () => {
    let arch = './pages/arch.html'
    window.location = arch
  })

  lista[3].addEventListener('click', () => {
    let css = './pages/css.html'
    window.location = css
  })
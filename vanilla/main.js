import './style.css'

document.querySelector('#app').innerHTML = `
  <h1>Hello TinyMCE!!</h1>
`

tinymce.init({
  selector: '#mytextarea'
})

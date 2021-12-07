import './style.css'

document.querySelector('#app').innerHTML = `
  <h1>Hello TinyMCE!!</h1>
`

const editor = await tinymce.init({
  selector: '#mytextarea'
})

console.log(editor[0])

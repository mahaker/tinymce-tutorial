import './style.css'

document.querySelector('#app').innerHTML = `
  <h1>Hello TinyMCE!!</h1>
`

const editors = await tinymce.init({
  selector: '#mytextarea'
})

document.getElementById('mybutton').addEventListener('click', () => {
  const editor = editors[0]; // editor is only one
  console.log('getBody', editor.getBody());
  console.log('getContent', editor.getContent());
  console.log('getDoc', editor.getDoc());
})

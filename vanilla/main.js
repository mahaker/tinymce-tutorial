import './style.css'

document.querySelector('#app').innerHTML = `
  <h1>Hello TinyMCE!!</h1>
`

/**
 * TODO
 * 1. Editor#setContent
 * 2. Table plugin
 */

let editor;
tinymce.init({
  selector: '#mytextarea',
  language: 'ja',
}).then(editors => editor = editors[0]) // editor is only one

document.getElementById('mybutton').addEventListener('click', () => {
  console.log('getBody', editor.getBody());
  console.log('getContent', editor.getContent());
  console.log('getDoc', editor.getDoc());
})

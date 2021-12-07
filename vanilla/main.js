import './style.css'

document.querySelector('#app').innerHTML = `
  <h1>Hello TinyMCE!!</h1>
`

const editor = await tinymce.init({
  selector: '#mytextarea'
})

document.getElementById('mybutton').addEventListener('click', () => {
  console.log(editor[0].getContent());
})

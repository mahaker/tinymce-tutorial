import './style.css'

document.querySelector('#app').innerHTML = `
  <h1>Hello TinyMCE!!</h1>
`

const EDITOR_ID = 'mytextarea'

tinymce.init({
  selector: `#${EDITOR_ID}`,
  language: 'ja',
  plugins: 'table',
  toolbar: 'undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | outdent indent | table tabledelete | tableprops tablerowprops tablecellprops | tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol'
}).then(() => {
  tinymce.get(EDITOR_ID).setContent('<p>Edit <strong>me</strong>!</p>')
})

document.getElementById('mybutton').addEventListener('click', () => {
  const editor = tinymce.get(EDITOR_ID)
  console.log('getBody', editor.getBody())
  console.log('getContent', editor.getContent())
  console.log('getDoc', editor.getDoc())
})

import * as tinymce from './editor';

let editor;

function heading() {
  const element = document.createElement('h1');
  element.innerText = 'Hello TinyMCE!';
  return element;
}

function editorArea() {
  const element = document.createElement('textarea');
  element.id = 'editor';
  return element;
}

function getContentButton() {
  const element = document.createElement('button');
  element.id = 'getContent';
  element.innerText = 'getContent';
  element.addEventListener('click', () => {
    console.log(editor.getContent());
  });
  return element;
}

function renderEditor() {
  tinymce.render().then(editors => editor = editors[0]);
}

const parent = document.createElement('p');
parent.appendChild(editorArea());
document.body.appendChild(heading());
document.body.appendChild(parent);
document.body.appendChild(getContentButton());
renderEditor();


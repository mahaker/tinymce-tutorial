<script setup>
import Editor from '@tinymce/tinymce-vue';

let content = "<p>Edit <strong>me</strong>!</p>"
const onBlur = (event, editor) => content = editor.getContent()
const log = () => console.log('log', content)
</script>

<template>
  <div id="app">
    <section>
      <h1>Hello TinyMCE!</h1>
    </section>
    <section>
      <editor
        :value="content"
        tinymce-script-src="src/tinymce/tinymce.min.js"
        @onBlur="onBlur"
        :init="{
          height: 500,
          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount'
          ],
          toolbar:
            'undo redo | formatselect | bold italic backcolor | \
            alignleft aligncenter alignright alignjustify | \
            bullist numlist outdent indent | removeformat | help',
          language: `ja`
        }"
      />
    </section>
    <section>
      <button @click="log">getContent</button>
    </section>
  </div>
</template>

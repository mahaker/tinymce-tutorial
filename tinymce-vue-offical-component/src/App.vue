<script setup>
import Editor from '@tinymce/tinymce-vue';
</script>

<template>
  <div id="app">
    <section>
      <h1>hello world!</h1>
    </section>
    <section>
      <editor
        tinymce-script-src="src/tinymce/tinymce.min.js"
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
  </div>
</template>

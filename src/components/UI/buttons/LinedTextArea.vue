<template>
   <textarea id="editor" rows="8"
             class="block w-full px-0 text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
             placeholder=" " required>{{inputText}}</textarea>
</template>

<script>
export default {
  props: {
    inputText: String
  }
}
</script>

<style scoped>

</style>
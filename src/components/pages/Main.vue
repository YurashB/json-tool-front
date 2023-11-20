<template>
  <nav-bar></nav-bar>
  <div class="main">
    <h1 class="font-medium mb-5">Welcome to Json Tool</h1>

    <div class="lg:columns-2 sm:columns-2 gap-8">
      <json-schema-input/>
      <json-input/>
    </div>
    <div>
      <button type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
        Save
      </button>
    </div>
  </div>
</template>

<script>

import {defineComponent} from "vue";
import JsonSchemaInput from "@/components/UI/forms/JsonSchemaInput.vue";
import JsonInput from "@/components/UI/forms/JsonInput.vue"

export default defineComponent({
  components: {JsonSchemaInput, JsonInput}
})
</script>

<style scoped>
.main {
  margin: 40px 40px 0 40px;
  height: 100vh;
}
</style>
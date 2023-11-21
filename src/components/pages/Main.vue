<template>
  <nav-bar></nav-bar>
  <div class="main">
    <h1 class="font-medium mb-5">Welcome to Json Tool</h1>
      <json-editor-comp />
  </div>
</template>

<script>
import {defineComponent} from "vue";
import JsonEditorComp from "@/components/UI/editors/JsonEditorComp.vue";

export default defineComponent({
  components: {JsonEditorComp}
})
</script>

<style scoped>
.main {
  margin: 40px 40px 0 40px;
  height: 100vh;
}
</style>
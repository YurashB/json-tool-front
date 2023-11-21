<template>
  <nav-bar></nav-bar>
  <div class="main">
    <h1 class="font-medium mb-5">Welcome to Json Tool</h1>
      <json-editor-comp
          title="Json input:"
          @convert="convert"
      />
    <text-component
        v-if="convertedData"
        title="Converted data"
        :content="convertedData"
    />
  </div>
</template>

<script>
import {defineComponent} from "vue";
import JsonEditorComp from "@/components/UI/editors/JsonEditorComp.vue";
import TextComponent from "@/components/UI/textareas/TextComponent.vue";

export default defineComponent({
  components: {TextComponent, JsonEditorComp},
  data() {
    return {
      convertedData: ""
    }
  },
  methods: {
    convert(data) {
      this.convertedData = data
    }
  }
})
</script>

<style scoped>
.main {
  margin: 40px 40px 0 40px;
  height: 100vh;
}
</style>
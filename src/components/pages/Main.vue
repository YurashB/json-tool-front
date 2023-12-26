<template>
  <nav-bar></nav-bar>
  <div class="main">
    <h1 class="font-medium mb-5">Welcome to Json Tool</h1>
    <custom-json-editor-comp
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
import SaveButton from "@/components/UI/buttons/SaveButton.vue";
import CustomJsonEditor from "@/components/UI/editors/CustomJsonEditor.vue";
import CustomJsonEditorComp from "@/components/UI/editors/CustomJsonEditorComp.vue";

export default defineComponent({
  components: {CustomJsonEditorComp, CustomJsonEditor, SaveButton, TextComponent, JsonEditorComp},
  data() {
    return {
      convertedData: "",
      title: "",
      json: ""
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
<template>
  <nav-bar></nav-bar>
  <div class="main">
    <h1 class="font-medium mb-5">Welcome to Json Tool</h1>
    <schema-file-loader
        v-if="validator === null"
        @load="schemaLoad"
    />
    <div class="columns-1 sm:columns-2" v-if="validator !== null">
      <json-editor-comp
          title="Json input:"
          @convert="convert"
          :validator="validator"
      />
      <read-only-json-editor
          title="Json schema:"
          :json="schema"
      />
    </div>
    <div class="columns-1">
      <text-component
          v-if="convertedData"
          title="Converted data"
          :content="convertedData"
      />
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import {createAjvValidator} from "vanilla-jsoneditor";
import JsonEditorComp from "@/components/UI/editors/JsonEditorComp.vue";
import TextComponent from "@/components/UI/textareas/TextComponent.vue";
import ReadOnlyJsonEditor from "@/components/UI/editors/ReadOnlyJsonEditor.vue";
import SchemaFileLoader from "@/components/UI/buttons/SchemaFileLoader.vue";

export default defineComponent({
  components: { ReadOnlyJsonEditor, TextComponent, JsonEditorComp, SchemaFileLoader},
  data() {
    return {
      validator: null,
      schema: "",
      convertedData: ""
    }
  },
  methods: {
    schemaLoad(schema) {
      try {
        this.schema = schema
        this.validator = createAjvValidator({schema});
      } catch (e) {
        alert("Invalid json schema uploaded")
      }
    },
    convert(data) {
      this.convertedData = data;
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
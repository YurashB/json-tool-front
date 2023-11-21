<template>
  <nav-bar></nav-bar>
  <div class="main">
    <h1 class="font-medium mb-5">Welcome to Json Tool</h1>
    <schema-file-loader
        v-if="validator === null"
        @load="schemaLoad"
    />
    <div class="columns-1 sm:columns-2" v-if="validator !== null">
      <json-editor
          :validator="validator"
          mode="text"
      />
      <json-editor
          mode="text"
          :json="schema"
          :readOnly="true"
      />
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import JsonToFlatView from "@/components/UI/buttons/JsonToFlatView.vue";
import SchemaFileLoader from "@/components/UI/buttons/SchemaFileLoader.vue";
import {createAjvValidator} from "vanilla-jsoneditor";

export default defineComponent({
  components: {JsonToFlatView, SchemaFileLoader},
  data() {
    return {
      validator: null,
      schema: ""
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
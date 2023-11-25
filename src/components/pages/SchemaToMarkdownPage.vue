<template>
  <nav-bar></nav-bar>
  <div class="main">
    <h1 class="font-medium mb-5">Welcome to Json Tool</h1>
    <schema-file-loader
        @load="convert"
    />
    <text-component
        v-if="convertedData"
        title="Converted data"
        :content="convertedData"
        />
  </div>
</template>

<script>
import SchemaFileLoader from "@/components/UI/buttons/SchemaFileLoader.vue";
import NavBar from "@/components/UI/navbar/NavBar.vue";
import TextComponent from "@/components/UI/textareas/TextComponent.vue";
import parse from "json-schema-to-markdown";

export default {
  components: {TextComponent, NavBar, SchemaFileLoader},
  data() {
    return {
      convertedData: ""
    }
  },
  methods: {
    convert(schema) {
      this.convertedData = parse(schema)
    }
  }
}
</script>

<style scoped>
.main {
  margin: 40px 40px 0 40px;
  height: 100vh;
}
</style>
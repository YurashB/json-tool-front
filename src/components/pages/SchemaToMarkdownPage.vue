<template>
  <nav-bar />
  <div class="main">
    <h1 class="font-medium mb-5">Welcome to Json Tool</h1>
    <schema-file-loader
        @load="convert"
    />
  </div>
</template>

<script>
import SchemaFileLoader from "@/components/UI/buttons/SchemaFileLoader.vue";
import NavBar from "@/components/UI/navbar/NavBar.vue";

export default {
  components: {NavBar, SchemaFileLoader},
  methods: {
    convert(schema) {
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
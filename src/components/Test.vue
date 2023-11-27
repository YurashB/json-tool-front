<template>
  <div>
    {{user}}
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      user: "You are not login"
    }
  },
  mounted() {
    console.log(document.cookie)
  }
}
</script>

<style lang="scss" scoped>

</style>
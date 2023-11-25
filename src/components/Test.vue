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
    axios.get("/user").then((data) => {
      console.log(data)
      this.user = data
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
<template>
  <div>
    <h2 class="text-3xl mb-2">{{ title }}</h2>
    <div class="mb-4 border border-gray-200 rounded-t-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
      <div class="flex items-center justify-between px-3 py-2 border-b dark:border-gray-600">
        <div
            class="flex flex-wrap items-center divide-gray-200 sm:divide-x sm:rtl:divide-x-reverse dark:divide-gray-600">
          <div class="flex items-center space-x-1 rtl:space-x-reverse sm:pe-4">
            <json-to-flat-view
                @convert="convertToFlat"
                :json="json"
                :disabled="buttonDisabled"
            />
            <save-button
                v-model:data="json"
                v-bind:disabled="isSaveButtonDisabled"
            />
          </div>
        </div>
      </div>
      <div class="bg-white dark:bg-gray-800">
        <json-editor
            v-model="json"
            class="json-editor"
            mode="text"
            :validator="validator"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TextComponent from "@/components/UI/textareas/TextComponent.vue";
import JsonToFlatView from "@/components/UI/buttons/JsonToFlatView.vue";
import SaveButton from "@/components/UI/buttons/SaveButton.vue";
import axios from "axios";

export default {
  components: {SaveButton, JsonToFlatView, TextComponent},
  data() {
    return {
      json: "",
      convertedData: "",
      isJsonValid: false,
      isAuth: false,
      isSaveButtonDisabled: true
    }
  },
  props: {
    buttonDisabled: false,
    validator: "",
    title: ""
  },
  methods: {
    convertToFlat(flattenJson) {
      this.convertedData = flattenJson
      this.$emit('convert', flattenJson)
    }
  },
  mounted() {
    axios.get("/auth/user").then(res => {
      this.isAuth = res.status === 200;
    })
  },
  watch: {
    json() {
      console.log(this.json)
      try{
        this.isSaveButtonDisabled = !this.isAuth && false
      } catch (e) {
        this.isSaveButtonDisabled = !this.isAuth && true
      }
    }
  }
}
</script>

<style scoped>

</style>
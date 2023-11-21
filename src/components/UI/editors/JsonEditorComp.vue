<template>
  <div>
    <h2 class="text-3xl mb-2">Json input:</h2>
    <div class="mb-4 border border-gray-200 rounded-t-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
      <div class="flex items-center justify-between px-3 py-2 border-b dark:border-gray-600">
        <div
            class="flex flex-wrap items-center divide-gray-200 sm:divide-x sm:rtl:divide-x-reverse dark:divide-gray-600">
          <div class="flex items-center space-x-1 rtl:space-x-reverse sm:pe-4">
            <json-to-flat-view @convert="convertToFlat" :json="json"/>
          </div>
        </div>
      </div>
      <div class="bg-white dark:bg-gray-800">
        <json-editor
            v-model="json"
            class="json-editor"
            mode="text"

        />
      </div>
    </div>
    <div v-if="convertedData">
      <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Converted data</label>
      <textarea id="message" rows="4"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                readonly>{{convertedData}}</textarea>
    </div>
  </div>
</template>

<script>
import JsonToFlatView from "@/components/UI/buttons/JsonToFlatView.vue";

export default {
  components: {JsonToFlatView},
  data() {
    return {
      json: "",
      convertedData: "",
      isJsonValid: false
    }
  },
  methods: {
    convertToFlat(flattenJson) {
      this.convertedData = flattenJson
    }
  }
}
</script>

<style scoped>

</style>
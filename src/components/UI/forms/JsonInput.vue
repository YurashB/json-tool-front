<template>
  <div>
    <h2 class="text-3xl">Json input</h2>
    <div class="mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
      <div class="flex items-center justify-between px-3 py-2 border-b dark:border-gray-600">
        <div
            class="flex flex-wrap items-center divide-gray-200 sm:divide-x sm:rtl:divide-x-reverse dark:divide-gray-600">
          <div class="flex items-center space-x-1 rtl:space-x-reverse sm:pe-4">
            <button type="button"
                    class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                   stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"/>
              </svg>
              <span class="text-xs">Convert to table</span>
            </button>
          </div>
        </div>
      </div>
      <div class="px-4 py-2 bg-white rounded-b-lg dark:bg-gray-800">
        <div class="line-numbers">
          <span></span>
        </div>
        <lined-text-area :input-text="inputText"/>
      </div>
    </div>
  </div>
</template>
<!--JSON INPUT-->
<!--JSON INPUT-->
<!--JSON INPUT-->
<!--JSON INPUT-->
<!--JSON INPUT-->
<!--JSON INPUT-->
<!--JSON INPUT-->
<!--JSON INPUT-->
<!--JSON INPUT-->
<!--JSON INPUT-->
<!--JSON INPUT-->
<!--JSON INPUT-->
<!--JSON INPUT-->
<!--JSON INPUT-->
<!--JSON INPUT-->
<!--JSON INPUT-->
<!--JSON INPUT-->
<!--JSON INPUT-->
<!--JSON INPUT-->
<!--JSON INPUT-->
<!--JSON INPUT-->
<!--JSON INPUT-->
<!--JSON INPUT-->
<!--JSON INPUT-->
<!--JSON INPUT-->
<!--JSON INPUT-->
<!--JSON INPUT-->
<!--JSON INPUT-->
<!--JSON INPUT-->
<script>

import {defineComponent} from "vue";
import LinedTextArea from "@/components/UI/buttons/LinedTextArea.vue";

export default defineComponent({
  components: {LinedTextArea},
  data() {
    return {
      inputText: "[\n" +
          "   {\n" +
          "      \"id\": 2,\n" +
          "      \"name\": \"An ice sculpture\",\n" +
          "      \"price\": 12.50,\n" +
          "   },\n" +
          "\t\n" +
          "   {\n" +
          "      \"id\": 3,\n" +
          "      \"name\": \"A blue mouse\",\n" +
          "      \"price\": 25.50,\n" +
          "   }\n" +
          "]"
    }
  }
})
</script>

<style scoped>
textarea {
  resize: none;
  height: 350px;
}
</style>
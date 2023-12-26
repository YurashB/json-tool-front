<template>
  <button
      type="button"
      @click="validate"
      class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
         class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
    </svg>
    <a class="text-xs">Validate</a>
  </button>
</template>

<script>
import axios from "axios";
import {data} from "autoprefixer";

export default {
  props: {
    json: "",
  },
  methods: {
    validate() {
      axios.get("/jsons/validation", {
        params: {
          json: this.json
        }
      }).then(resp => {
        data = {
          validationMessage: resp.data.message,
          isValid: resp.data.isValid
        }

        this.$emit('validate', data);
      })
    }
  }
}
</script>
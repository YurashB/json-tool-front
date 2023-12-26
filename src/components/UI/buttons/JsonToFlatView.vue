<template>
  <button
      type="button"
      @click="convert"
      :disabled="disabled"
      class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
         class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round"
            d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"/>
    </svg>
    <a class="text-xs">Convert to flat view</a>
  </button>
</template>

<script>
export default {
  props: {
    json: {},
    disabled: false
  },
  methods: {
    convert() {
      try {
        console.log("dsdsd")
        const json = JSON.parse(this.json);

        const flattenJSON = (obj = {}, res = {}, extraKey = '') => {
          for (let key in obj) {
            if (typeof obj[key] !== 'object') {
              res[extraKey + key] = obj[key];
            } else {
              flattenJSON(obj[key], res, `${extraKey}${key}.`);
            }
          }
          return res;
        };

        this.$emit('convert', flattenJSON(json));
      } catch (e) {
        alert(e);
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
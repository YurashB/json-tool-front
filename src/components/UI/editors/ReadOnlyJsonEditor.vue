<template>
  <div>
    <h2 class="text-3xl mb-2">{{title}}</h2>
    <div class="mb-4 border border-gray-200 rounded-t-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
      <div class="flex items-center justify-between px-3 py-2 border-b dark:border-gray-600">
        <div
            class="flex flex-wrap items-center divide-gray-200 sm:divide-x sm:rtl:divide-x-reverse dark:divide-gray-600">
          <div class="flex items-center space-x-1 rtl:space-x-reverse sm:pe-4">
            <json-to-flat-view
                :disabled="true"
            />
          </div>
        </div>
      </div>
      <div class="bg-white dark:bg-gray-800">
        <json-editor
            :value="json"
            class="json-editor"
            mode="text"
            :readOnly="true"
        />
      </div>
    </div>
  </div>
</template>

<script>
import JsonToFlatView from "@/components/UI/buttons/JsonToFlatView.vue";
import TextComponent from "@/components/UI/textareas/TextComponent.vue";

export default {
  components: {TextComponent, JsonToFlatView},
  props: {
    json: "",
    title: ""
  },
}
</script>

<style scoped>

</style>
<template>
  <nav-bar/>
  <div class="main">
    <h1 class="font-medium mb-5">Saved snapshots</h1>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="px-20 py-3">
            Name
          </th>
          <th scope="col" class="px-1 py-3">
            Last edit
          </th>
          <th scope="col" class="px-1 py-3">
            Action
          </th>
          <th scope="col" class="px-1 py-3">
            Action
          </th>
        </tr>
        </thead>
        <tbody>
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th scope="row" class="px-20 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            Snapshot
          </th>
          <td class="px-1 py-4">
            02.12.2022 12:23
          </td>
          <td class="px-1 py-2">
            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
          </td>
          <td class="px-1 py-4">
            <a href="#" class="font-medium text-red-600 dark:text-blue-500 hover:underline">Delete</a>
          </td>
        </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
import NavBar from "@/components/UI/navbar/NavBar.vue";
import TextComponent from "@/components/UI/textareas/TextComponent.vue";
import JsonEditorComp from "@/components/UI/editors/JsonEditorComp.vue";
import SaveButton from "@/components/UI/buttons/SaveButton.vue";

export default {
  components: {SaveButton, JsonEditorComp, TextComponent, NavBar}

}
</script>

<style scoped>
.main {
  margin: 40px 40px 0 40px;
  height: 100vh;
}
</style>
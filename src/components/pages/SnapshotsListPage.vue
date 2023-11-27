<template>
  <nav-bar/>
  <div class="main">
    <h1 class="font-medium mb-5">Saved snapshots</h1>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table
          v-if="snapshots.length !== 0"
          class="table-auto w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="px-4 py-3 w-">
            Name
          </th>
          <th scope="col" class="px-1 py-3 w-3/12">
            Last edit
          </th>
          <th scope="col" class="px-1 py-3 w-1/12">
            Action
          </th>
          <th scope="col" class="px-1 py-3 w-1/12">
            Action
          </th>
        </tr>
        </thead>
        <tbody>
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" v-for="snapshot in snapshots"
            :key="snapshot.id">
          <th scope="row" class="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {{ snapshot.title }}
          </th>
          <td class="px-1 py-4">
            {{ snapshot.lastModified }}
          </td>
          <td class="px-1 py-2">
            <button @click="editSnapshot(snapshot.id)"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Download
            </button>
          </td>
          <td class="px-1 py-4">
            <button @click="deleteSnapshot(snapshot.id, snapshot.title)"
                    class="font-medium text-red-600 dark:text-blue-500 hover:underline">Delete
            </button>
          </td>
        </tr>
        </tbody>
      </table>
      <h2 v-else>There aren`t any snapshots</h2>
    </div>
    <div>{{console.log(this)}}</div>

  </div>
</template>

<script>
import NavBar from "@/components/UI/navbar/NavBar.vue";
import TextComponent from "@/components/UI/textareas/TextComponent.vue";
import JsonEditorComp from "@/components/UI/editors/JsonEditorComp.vue";
import SaveButton from "@/components/UI/buttons/SaveButton.vue";
import axios from "axios";
import router from "@/components/router/router";
import swal from "sweetalert";

export default {
  components: {SaveButton, JsonEditorComp, TextComponent, NavBar},
  data() {
    return {
      snapshots: []
    }
  },
  mounted() {
    axios.get("/snapshots").then((response) => {
      if (response.status === 200) {
        const snapshots = response.data;
        console.log(document.cookie)
        snapshots.forEach(snapshot => {
          snapshot.lastModified = this.convertDateTime(snapshot.lastModified)
        });
        this.snapshots = snapshots
      } else {
        router.push("/login")
      }
    });
  },
  methods: {
    convertDateTime(date) {
      const formatted = new Date(date)
      return formatted.toLocaleString('uk-UA')
    },
    deleteSnapshot(id, title) {
      swal({
        title: title,
        text: "Are you really want to delete this snapshot?",
        icon: "warning",
        buttons: {
          cancel: true,
          confirm: {text: "Confirm", value: "confirm"}
        }
      }).then((value) => {
        if (value === "confirm") {
          axios.delete(`/snapshots/${id}`).then((response) => {
            if (response.status === 200) {
              this.snapshots = this.snapshots.filter(snapshot => {
                return snapshot.id !== id
              })
            }
          })
        }
      })
    },
    editSnapshot(id) {
      axios.get(`/snapshots/${id}`).then((response => {
        if (response.status === 200) {
          const url = window.URL
              .createObjectURL(new Blob([response.data.content], {type: "application/json"}));
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', `${response.data.title}.json`);
          document.body.appendChild(link);
          link.click();
        }
      }))
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
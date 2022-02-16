<template>
  <div class="p-2">
    <h2 class="title is-2 has-text-centered mt-2">Adicione sua tarefa!</h2>
    <RouterLink to="create-task" class="button is-success mt-5">
        Add New
    </RouterLink>
    <div ref="printcontent">
      <table class="table is-striped is-bordered mt-2 is-fullwidth">
        <thead>
          <tr>
            <th>Tarefa</th>
            <th>Descricao</th>
            <th>Time</th>
            <th>Projeto</th>
            <th class="has-text-centered">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.product_id">
            <td>{{ item.tarefa }}</td>
            <td>{{ item.descricao }}</td>
            <td>{{ item.minutos }}</td>
            <td>{{ item.projeto }}</td>
            <td class="has-text-centered">
              <RouterLink
                :to="{ name: 'Edit', params: { id: item.id } }"
                class="button is-info is-small mr-2"
                >Edit</RouterLink
              >
              <a
                class="button is-danger is-small"
                @click="deleteTasks(item.id)"
              >
                Delete
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <a class="button is-info is-light mt-2" @click.="printThis">Tirar print</a>
  </div>
</template>
  
<script>
 import axios from "axios";
  
export default {
  name: "TasksView",
  data() {
    return {
      items: [],
      output: null
    };
  },
  
  created() {
    this.getTasks();
  },
  
  methods: {
    // Get All Products
    async getTasks() {
      try {
        const response = await axios.get("http://localhost:5001/tasks");
        this.items = response.data;
      } catch (err) {
        console.log(err);
      }
    },
  
    // Delete Product
    async deleteTasks(id) {
      try {
        await axios.delete(`http://localhost:5001/tasks/${id}`);
        this.getTasks();
      } catch (err) {
        console.log(err);
      }
    },
    async printThis() {
      console.log("printing..");
      const el = this.$refs.printcontent;

      const options = {
        type: "dataURL",
      };
      const printCanvas = await html2canvas(el, options);

      const link = document.createElement("a");
      link.setAttribute("download", "download.png");
      link.setAttribute(
        "href",
        printCanvas
          .toDataURL("image/png")
          .replace("image/png", "image/octet-stream")
      );
      link.click();

      console.log("done");
    },
  },
};

</script>
  
<style>
</style>
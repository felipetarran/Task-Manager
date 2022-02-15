<template>
  <div>
    <h2 class="title is-2 has-text-centered mt-2">Edite sua tarefa!</h2>
    <div class="container">
      <div class="field">
        <label class="label">Tarefa</label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="Insira a tarefa"
            v-model="taskName"
          />
        </div>
      </div>
    
      <div class="field">
        <label class="label">Descrição</label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="Insira a descrição"
            v-model="taskDescription"
          />
        </div>
      </div>
      <div class="field">
        <label class="label">Tempo</label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="Insira os minutos"
            v-model="taskTime"
          />
      </div>
      </div>
      <div class="control">
        <button class="button is-success" @click="updateTaskById">UPDATE</button>
      </div>
    </div>
  </div>
</template>
  
<script>
// import axios
import axios from "axios";
  
export default {
  name: "EditProduct",
  data() {
    return {
      taskName: "",
      taskDescription: "",
      taskTime: ""
    };
  },
  created: function () {
    this.getTaskById();
  },
  methods: {
    // Get Product By Id
    async getTaskById() {
      try {
        const response = await axios.get(
          `http://localhost:5001/tasks/${this.$route.params.id}`
        );
        this.taskName = response.data.tarefa;
        this.taskDescription = response.data.descricao;
        this.taskTime = response.data.minutos;
      } catch (err) {
        console.log(err);
      }
    },
  
    // Update product
    async updateTaskById() {
      try {
        await axios.put(
          `http://localhost:5001/tasks/${this.$route.params.id}`,
          {
            tarefa: this.taskName,
            descricao: this.taskDescription,
            minutos: this.taskTime
          }
        );
        this.taskName = "";
        this.taskDescription = "";
        this.taskTime = "";
        this.$router.push("/tasks");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
  
<style>
</style>
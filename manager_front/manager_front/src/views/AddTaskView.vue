<template>
  <div class="container">
    <h2 class="title is-2 has-text-centered mt-2">Adicione sua tarefa!</h2>
    <div class="field">
      <label class="label">Tarefa</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Digite a tarefa"
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
          placeholder="Insira uma Descrição"
          v-model="taskDescription"
        />
      </div>
    </div>

     <div class="field">
      <label class="label">Minutos</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Tempo em minutos"
          v-model="taskTime"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">Data</label>
      <div class="control">
        <input
          class="input"
          type="date"
          v-model="taskDate"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">Projeto</label>
      <div class="control">
        <div class="select">
          <select
            v-model="taskProject"
          >
            <option>Lookmoda</option>
            <option>Fa colchoes</option>
            <option>Farben</option>
            <option>AJ</option>
          </select>
        </div>
      </div>
    </div>
  
    <div class="control">
      <button class="button is-success" @click="saveTask">SAVE</button>
    </div>
  </div>
</template>
  
<script>
// import axios
import axios from "axios";
  
export default {
  name: "AddProduct",
  data() {
    return {
      taskName: "",
      taskDescription: "",
      taskTime: "",
      taskDate: new Date().toISOString().slice(0, 10),
      taskProject: ""
    };
  },
  created(){
    console.log(this.taskDate)
  },
  methods: {
    // Create New task
    async saveTask() {
      try {
        await axios.post("http://localhost:5001/tasks", {
          tarefa: this.taskName,
          descricao: this.taskDescription,
          minutos: this.taskTime,
          date: this.taskDate,
          projeto: this.taskProject
        });
        this.taskName = "";
        this.taskDescription = "";
        this.taskTime = "";
        this.taskDate = "";
        this.taskProject = "";
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
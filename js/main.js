Vue.component('new-task-form',{
    template:`
    <form>
        <p>Заголовок задачи и список подзадач</p>
        <label for="name">Name:</label>
        <input required id="name" v-model="name" placeholder="Заголовок задачи"><br>
        
        <label for="subtask1">Подзадача 1</label>
        <input required id="subtask1" v-model="subtask1" placeholder="Подзадача"><br>
        
         <label for="subtask1">Подзадача 2</label>
        <input required id="subtask1" v-model="subtask1" placeholder="Подзадача"><br>
        
         <label for="subtask1">Подзадача 3</label>
        <input required id="subtask1" v-model="subtask1" placeholder="Подзадача"><br>
        
         <label for="subtask1">Подзадача 4</label>
        <input required id="subtask1" v-model="subtask1" placeholder="Подзадача"><br>
        
         <label for="subtask1">Подзадача 5</label>
        <input required id="subtask1" v-model="subtask1" placeholder="Подзадача"><br>
        
        <input type="submit" value="Submit">
        
    </form>`
})

let app = new Vue({
    el: '#app',
    data: {

    },
    methods: {},
})
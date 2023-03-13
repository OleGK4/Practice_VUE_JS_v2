let eventBus = new Vue()

Vue.component('task-list', {
    mounted() {
        eventBus.$on('task-submitted', task => {
            this.tasks.push(task)
        })
    },
    template: `
    <new-task-form></new-task-form>
    <ul>
        <li v-for ="task in tasks">{{ task }}</li>
    </ul>
    `,
    data() {
        return {
            tasks: [],
        };
    }
})

Vue.component('new-task-form', {
    template: `
    <form>
        <p>Заголовок задачи и список подзадач</p>
        <label for="title">Name:</label>
        <input required id="title" v-model="title" placeholder="Заголовок задачи"><br>
        
        <label for="subtask1">Подзадача 1</label>
        <input required id="subtask1" v-model="subtask1" placeholder="Подзадача"><br>
        
         <label for="subtask1">Подзадача 2</label>
        <input required id="subtask1" v-model="subtask2" placeholder="Подзадача"><br>
        
         <label for="subtask1">Подзадача 3</label>
        <input required id="subtask1" v-model="subtask3" placeholder="Подзадача"><br>
        
         <label for="subtask1">Подзадача 4</label>
        <input required id="subtask1" v-model="subtask4" placeholder="Подзадача"><br>
        
         <label for="subtask1">Подзадача 5</label>
        <input required id="subtask1" v-model="subtask5" placeholder="Подзадача"><br>
        
        <input type="submit" value="Submit">
        
    </form>`,
    data() {
        return {
            title: null,
            subtask1: null,
            subtask2: null,
            subtask3: null,
            subtask4: null,
            subtask5: null,
            errors: [],
        }
    },
    methods: {
        toSubmit() {
            if (this.title && this.subtask1 && this.subtask2 && this.subtask3 && this.subtask4 && this.subtask5) {
                let task = {
                    title: this.title,
                    subtask1: this.subtask1,
                    subtask2: this.subtask2,
                    subtask3: this.subtask3,
                    subtask4: this.subtask4,
                    subtask5: this.subtask5,
                }
                eventBus.$emit('task-submitted', task)
                this.title = null
                this.subtask1 = null
                this.subtask2 = null
                this.subtask3 = null
                this.subtask4 = null
                this.subtask5 = null
            } else {
                if (!this.name) this.errors.push("Name required.")
                if (!this.comment) this.errors.push("Comment required.")
            }
        },
    },
})


let app = new Vue({
    el: '#app',
    data: {},
    methods: {},
})
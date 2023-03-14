let eventBus = new Vue()

Vue.component('task-list', {
    data() {
        return {
            column1: [],
            column2: [],
            column3: [],
            errors: [],
        }
    },
    template: `
    <div>
       <new-task-form></new-task-form>
       <row-one></row-one>
    </div>    
    `,
    mounted() {
        eventBus.$on('task-submitted', task => {
            this.errors = []
            if (this.column1.length < 3){
                this.column1.push(task)
            } else {
                this.errors.push("Now enough space to add task!.")
            }
        })
    },
})

Vue.component('new-task-form', {
    template: `
    <form @submit.prevent="toSubmit">
        <p>Заголовок задачи и список подзадач</p>
        <label for="title">Name:</label>
        <input required id="title" v-model="title" placeholder="Заголовок задачи"><br>
        
        <p v-if="errors" v-for="error in errors">{{ error }}</p>
        
        <label for="subtask1">Подзадача 1</label>
        <input id="subtask1" v-model="subtask1" placeholder="Подзадача"><br>
        
         <label for="subtask1">Подзадача 2</label>
        <input id="subtask1" v-model="subtask2" placeholder="Подзадача"><br>
        
         <label for="subtask1">Подзадача 3</label>
        <input id="subtask1" v-model="subtask3" placeholder="Подзадача"><br>
        
         <label for="subtask1">Подзадача 4</label>
        <input id="subtask1" v-model="subtask4" placeholder="Подзадача"><br>
        
         <label for="subtask1">Подзадача 5</label>
        <input id="subtask1" v-model="subtask5" placeholder="Подзадача"><br>
        
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
                    subtasks: [{title: this.subtask1, completed: false},
                        {title: this.subtask2, completed: false},
                        {title: this.subtask3, completed: false},
                        {title: this.subtask4, completed: false},
                        {title: this.subtask5, completed: false}],
                    date: null,
                }
                eventBus.$emit('task-submitted', task)
                this.title = null
                this.subtask1 = null
                this.subtask2 = null
                this.subtask3 = null
                this.subtask4 = null
                this.subtask5 = null
          }else {
                if (!this.title) this.errors.push("Name required.")
                if (!this.subtask1) this.errors.push("subtask1 required.")
                if (!this.subtask2) this.errors.push("subtask2 required.")
                if (!this.subtask3) this.errors.push("subtask3 required.")
                if (!this.subtask4) this.errors.push("subtask4 required.")
                if (!this.subtask5) this.errors.push("subtask5 required.")
            }
        },
    },
})


Vue.component('row-one', {
    // mounted() {
    //     eventBus.$on('task-submitted', task => {
    //         this.tasks.push(task)
    //     })
    // },
    data() {
        return {
            tasks: [],
        }
    },
    template: `
     <div>   
        <ul>task list
            <li v-for ="task in tasks">{{ task }}</li>
        </ul>
        <p>{{ taskListArr }}</p>
    </div>    
    `,
    methods: {
        taskListArr(){
            let sum = null;
            this.tasks.forEach(function(elem) {
                sum += elem;
            })
            return sum;
        }

    },


})


let app = new Vue({
    el: '#app',
    data: {},
    methods: {},
})

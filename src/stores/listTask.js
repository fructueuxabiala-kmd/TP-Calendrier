import { defineStore } from 'pinia'

export const useListStore = defineStore('list', {
  state: () => ({
    tasks: [],
    editedTask: null,
    isEdit: false,
  }),

  getters: {
    tasksByDate: (state) => {
      return (date) => {
        return state.tasks.filter((task) => task.day === date)
      }
    },
  },

  actions: {

    toggleEdit(){
        this.isEdit = !this.isEdit
    },
    addTask(task) {
      this.tasks.push(task)
    },

    removeTask(id) {
      this.tasks = this.tasks.filter((t) => t.id !== id)
    },

    setEditedTask(obj){
        this.editedTask = obj 
    },

    updateTask(changedTask){
        if(this.editedTask !== null){
             this.editedTask.task = changedTask
        }
    }
  },
})

export const useModalStore = defineStore('modal',{
    state: ()=> ({
        isOpen: false,
        selectedDay: 'Lundi'
    }),

    actions:{
        open(){
            this.isOpen = true
        },
        close(){
            this.isOpen = false
        },
        setDay(day){
          this.selectedDay = day
        }
    }


})

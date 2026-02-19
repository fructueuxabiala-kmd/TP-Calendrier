import { defineStore } from 'pinia'

export const useListStore = defineStore('list', {
  state: () => ({
    tasks: [],
    editedTask: null,
    isEdit: false,
    deletedTask: null,
    isOpenConfirm: false,
    message:''
  }),

  getters: {
    tasksByDate: (state) => {
      return (date) => {
        return state.tasks.filter((task) => task.day === date)
      }
    },
  },

  actions: {
    toggleEdit() {
      this.isEdit = !this.isEdit
    },
    addTask(task) {
      this.tasks.push(task)
    },

    removeTask(id) {
      console.log(id);
      
      this.tasks = this.tasks.filter((t) => t.id !== id)
      this.isOpenConfirm = false
      this.deletedTask = null
    },

    setEditedTask(obj) {
      this.editedTask = obj
    },
     setDeletedTask(id) {
      this.deletedTask = id
      this.isOpenConfirm = true
    },
    showMessage(msg){
      this.message = msg
    },

    updateTask(changedTask) {
      if (this.editedTask !== null) {
        this.editedTask.task = changedTask
      }
    },
    dropTask(id, jour) {
  const index = this.tasks.findIndex((t) => t.id === id)
  if (index !== -1) {
    // crée un nouvel objet pour que Vue détecte le changement
    this.tasks[index] = { ...this.tasks[index], day: jour }
  }

  
},
  closeConfirm() {
      this.isOpenConfirm = false
    },
}
})

export const useModalStore = defineStore('modal', {
  state: () => ({
    isOpen: false,
    selectedDay: 'Lundi',
    
  }),

  actions: {
    open() {
      this.isOpen = true
    },
    close() {
      this.isOpen = false
    },
    setDay(day) {
      this.selectedDay = day
    }
  },
})


export const useNotificationStore = defineStore('notification', {
  state: () => ({
    message: '',
    type: 'success', // success / error / info
    isOpen: false,
  }),
  actions: {
    show(msg, type = 'success') {
      this.message = msg
      this.type = type
      this.isOpen = true

      // Auto-close après 3 secondes
      setTimeout(() => {
        this.close()
      }, 3000)
    },
    close() {
      this.isOpen = false
      this.message = ''
    },
  },
})

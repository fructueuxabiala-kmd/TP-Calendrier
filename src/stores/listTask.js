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
    toggleEdit() {
      this.isEdit = !this.isEdit
    },
    addTask(task) {
      this.tasks.push(task)
    },

    removeTask(id) {
      this.tasks = this.tasks.filter((t) => t.id !== id)
    },

    setEditedTask(obj) {
      this.editedTask = obj
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
}

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
    },
  },
})

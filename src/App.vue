<script setup>
import Navigation from './components/Navigation.vue';
import Modal from './views/Modal.vue';
import ModalConfirm from './views/ModalConfirm.vue';




</script>

<template>
  <Navigation/>
 <main>
   <ModalConfirm></ModalConfirm>
   <Modal></Modal>
  <RouterView/>


 </main>
</template>

<style scoped></style>

<script setup>
import Navigation from './components/Navigation.vue';
import Modal from './views/Modal.vue';
import ModalConfirm from './views/ModalConfirm.vue';




</script>

<template>
  <Navigation/>
 <main>
  <RouterView/>

  <ModalConfirm></ModalConfirm>
  <Modal></Modal>


 </main>
</template>

<style scoped></style>

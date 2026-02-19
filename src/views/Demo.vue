 <script setup>


import demoVideo from '@/assets/demofinal.mp4'

 


</script>


<template>
    <section class="relative bg-white text-white  section-padding h-screen" >
  

  <!-- Main Content Container -->
  <div class="container mx-auto px-4  py-4 relative z-10 mb-28">
    <!-- Heading & Description -->
    <div class="text-center max-w-3xl mx-auto mb-16">
      <h2 class="text-3xl md:text-4xl font-bold mb-6 font-serif">
        <span class="text-indigo-500">Fonctionnement de notre site</span>
      </h2>
      <p class="text-lg text-gray-400">
        Suivez cette vidéo pour optimiser vos interactions sur notre site web
      </p>
    </div>

<div class="max-w-4xl mx-auto">
  <div class="bg-[#1a1a1a] rounded-t-xl py-3 px-5 flex items-center gap-2 border-b border-white/5">
    <div class="flex gap-1.5">
      <div class="w-3 h-3 rounded-full bg-red-500/80"></div>
      <div class="w-3 h-3 rounded-full bg-yellow-500/80"></div>
      <div class="w-3 h-3 rounded-full bg-green-500/80"></div>
    </div>
    <div class="mx-auto text-xs text-gray-400 font-medium truncate max-w-[200px]">
      demo_video.mp4
    </div>
  </div>

  <div class="relative bg-black rounded-b-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
    <video
      :src="demoVideo"
      controls
      autoplay
      muted
      loop
      class="w-full h-auto block"
    ></video>
  </div>
</div>
  </div>
</section>



</template>

<style scoped>


</style>




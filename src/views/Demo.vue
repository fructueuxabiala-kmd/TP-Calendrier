 <script setup>


  document.addEventListener('DOMContentLoaded', () => {
    const playButton = document.getElementById('play-button');
    const thumbnail = document.getElementById('thumbnail');
    const videoContainer = document.getElementById('video');

    playButton.addEventListener('click', () => {
      thumbnail.classList.add('hidden');
      videoContainer.classList.remove('hidden');
    });
  });


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

    <!-- Video Section -->
    <div class="max-w-4xl mx-auto">
      <div class="relative rounded-xl overflow-hidden shadow-2xl" id="video-container">
        <!-- Thumbnail View -->
        <div id="thumbnail" class="relative">
          <img
            src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
            alt="Video thumbnail"
            class="w-full aspect-video object-cover"
          />
          <div class="absolute inset-0 bg-black/30 flex items-center justify-center cursor-pointer" id="play-button">
            <!-- Play Button SVG -->
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-[#b03536]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M4 4l12 6-12 6V4z" />
            </svg>
          </div>
        </div>
        <!-- Video Embed -->
        <div id="video" class="hidden aspect-video relative ">
          <iframe
            class="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
            title="The Artist Barefoot Showcase"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Optional: Add JavaScript for toggle functionality -->

</template>

<style scoped>


</style>
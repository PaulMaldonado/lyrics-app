<script>
  import Navbar from './components/navbar/Navbar.vue'
  import Songs from './components/songs/Songs.vue'

  export default {
    name: 'App',
    components: {
      Navbar,
      Songs,
    }
  }
</script>

<template>
  <div>
    <Navbar />
    <Songs />
  </div>
</template>
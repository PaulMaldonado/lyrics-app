<template>
  <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom p-4 shadow-lg">
          <div class="container">
            <router-link to="/" class="navbar-brand">Lyric music</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link">Inicio</router-link>
                    </li>
                </ul>
            </div>
          </div>
      </nav>
  </div>
</template>

<script>
export default {
    name: 'Navbar',
}
</script>

<style>

</style>
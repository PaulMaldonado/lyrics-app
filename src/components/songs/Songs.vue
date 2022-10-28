<template>
  <div id="sectiion-song">
      <h1 class="text-center mt-4 display-4">Canciones Destacadas</h1>

    <div class="container mt-3">
        <div class="row">
            <div class="col-md-7 col-sm-12 col-lg-7 col-xl-7 col-xxl-7 mx-auto">
                <div class="p-1 bg-light rounded rounded-pill shadow-sm mb-4 shadow-lg">
                    <div class="input-group">
                        <input type="search" placeholder="Buscar por canción..." aria-describedby="button-addon1" class="form-control border-0 bg-light" v-model="search">
                        <div class="input-group-append">
                            <button id="button-addon1" type="submit" class="btn btn-link text-primary"><i class="fa fa-search"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

      <div class="container mt-3">
          <div class="row">
              <div class="col-md-3 col-sm-12 col-lg-3 col-xl-3 col-xxl-3 mx-auto mt-3" v-for="song in searchForLyrics" :key="song.id">
                <div class="card shadow-lg">
                    <img :src="song.header_image_url" :alt="song.header_image_url" class="img-fluid card-img-top" style="min-height: 20vh !important;">

                    <div class="card-body">
                        <h5 class="card-title">
                            {{ song.artist_names }}
                        </h5>

                        <div class="d-grid gap-2">
                            <router-link :to="{ name: 'SongId', params: { id: song.id } }" class="btn btn-dark mt-3">
                                Ir al album
                                <i class="fa-solid fa-music"></i>
                            </router-link>
                        </div>
                    </div>
                </div>
              </div>
          </div>
      </div>
  </div>
  <br>  
</template>

<script>
import axios from 'axios'

export default {
    name: 'Songs',

    data() {
        return {
            songs: [],
            search: '',
        }
    },

    created() {
        this.showSongs()
    },

    computed: {
        searchForLyrics() {
            return this.songs.filter((song) => {
                return song.artist_names.toLowerCase().includes(this.search.toLowerCase())
            })
        }
    },  

    methods: {
        showSongs() {
            axios({
                method: 'GET',
                url: 'https://genius.p.rapidapi.com/artists/16775/songs',
                headers: {
                    'X-RapidAPI-Key': '5ae9e6c3e8mshee189598f5d2334p1b32b2jsn48e806bb90b5',
                    'X-RapidAPI-Host': 'genius.p.rapidapi.com'
                }
            })
            .then(response => {
                console.log(response)

                this.songs = response.data.response.songs
            })
            .catch(error => {
                console.error(error)
            })
        }
    }
}
</script>

<style scoped>
    .form-control:focus {
        box-shadow: none;
    }

    .form-control-underlined {
        border-width: 0;
        border-bottom-width: 1px;
        border-radius: 0;
        padding-left: 0;
    }

    body {
        background: #ffd89b;
        background: -webkit-linear-gradient(to right, #ffd89b, #19547b);
        background: linear-gradient(to right, #ffd89b, #19547b);
        min-height: 100vh;
    }

    .form-control::placeholder {
        font-size: 0.95rem;
        color: #aaa;
        font-style: italic;
    }

    #section-song {
        background-color: #F2F2F2;
        width: 100%;
        min-height: 100vh;
    }
</style>
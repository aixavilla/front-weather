<template>
  <div class="container">
    <div class="columns">
      <div class="column is-one-third">
        <div class="column notification is-info">
          <p class="">{{city.name}},{{city.country}}</p>
          <img :src="temp.icon" alt="icon">
        </div>
      </div>
      <div class="column">
        <div class="column notification is-primary">
          <p>Estado Actual</p>
          <div class="level-item">
            <div class="column">
              <p>{{weather.main}}</p>
            </div>
            <div class="column">
              <p>{{weather.description}}</p>
            </div>
          </div>
        </div>
        <div class="column notification is-success">
          <p>Temperatura</p>
          <div class="level-item">
            <div class="column">
              <p>Temperatura Mínima</p>
              <p>{{temp.min}} °C</p>
            </div>
            <div class="column">
              <p>Temperatura Máxima</p>
              <p>{{temp.max}} °C</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
  name: 'currentWeather',
  created(){
    this.getWeather();
  },
  computed: {
    ...mapState(['city','temp','weather'])
  },
  methods: {
    ...mapActions(['getWeather']),
    ...mapMutations(['setWather']),
    getWeather() {
      this.$store.dispatch('getWeather');
    }
  }
}
</script>
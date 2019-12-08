<template>
  <div class="container">
    <div class="tabs is-fullwidth">
      <ul>
        <li class="is-active">
          <a>
            <span>Clima Actual</span>
          </a>
        </li>
      </ul>
    </div>
    <div>
      <currentWeather/>
    </div>
  </div>
</template>

<script>
import currentWeather from '../components/CurrentWeather';

export default {
  components:{
    currentWeather
  }
}
</script>
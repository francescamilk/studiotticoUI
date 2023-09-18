<template>
    <div class="container">
        <NavBar />
        <router-view/>
    </div>
</template>

<style lang="scss">
@import '@/assets/config/variables.scss';

body {
    font-family: $bodyFont;
    margin: 0;
    padding: 0;
}

h1, h2, h3, h4, h5, h6 {
    font-family: $headersFont;
}

a,
a:hover {
    text-decoration: none;
}

ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

.container {
    width: 80vw;
    max-width: 80vw;
    margin: 0 auto;
}
</style>

<script>
import NavBar from './components/NavBar.vue';

export default {
  components: {
    NavBar
  }
}
</script>
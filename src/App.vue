<template>
    <div class="container">
        <NavBar />
        <router-view/>
    </div>
    <Background />
</template>

<style lang="scss">
@import '@/assets/config/variables.scss';

body {
    font-family: $bodyFont;
    margin: 0;
    padding: 0;
    position: relative;
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
import Background from './components/Background.vue';

export default {
  components: {
    NavBar,
    Background
  }
}
</script>
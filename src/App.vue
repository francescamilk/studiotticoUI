<template>
    <div id="websiteContent" class="container">
        <div class="container">
            <div id="mainContent">
                <NavBar />
                <router-view/>
            </div>
            <Footer />
        </div>
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
    overflow-x: hidden;
}

h1, h2, h3, h4, h5, h6 {
    font-family: $headersFont;
}

a,
a:hover,
a:visited {
    text-decoration: none;
    color: black;
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

#websiteContent {
    position: relative;
    z-index: 1000;
}

#mainContent {
    min-height: 100vh;
}
</style>

<script>
import NavBar from '@/components/NavBar'
import Background from '@/components/Background'
import Footer from '@/components/Footer'

export default {
    components: {
        NavBar,
        Background,
        Footer
    }
}
</script>
<template>
    <header>
        <h1>
            Il tuo <br>
            Benessere visivo <br>
            E' la nostra <br>
            Passione.
        </h1>
        <img :src="require('@/assets/images/V1.png')" alt="Occhiali" />
    </header>
</template>

<style scoped>
header {
    height: 100vh;
    min-height: 100vh;
    max-height: 100vh;
    position: absolute;
    top: 0;
}

h1 {
    font-size: 6rem;
    width: 80vw;
    position: absolute;
    top: 4rem;
    z-index: 100;
    line-height: 7rem;
}

img {
    width: 80rem;
    position: absolute;
    bottom: 0;
    left: 16rem;
    z-index: 10;
}
</style>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Header'
}
</script>
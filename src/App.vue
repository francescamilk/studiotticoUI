<template>
    <div class="container">
        <router-view/>
    </div>
</template>

<style>
@font-face {
    font-family: 'OpticianSans';
    src: url('@/assets/fonts/OpticianSans.otf') format('opentype');
}

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Pontano+Sans:wght@300;400;500;600;700&display=swap');

body {
    font-family: 'Pontano Sans', sans-serif;
    margin: 0;
    padding: 0;
}

h1, h2, h3, h4, h5, h6 {
    font-family: 'OpticianSans', 'Poppins', sans-serif;
}

a,
a:hover {
    text-decoration: none;
}

.container {
    width: 80vw;
    max-width: 80vw;
    margin: 0 auto;
}
</style>

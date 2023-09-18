<template>
    <main class="home">
        <Header />
        <section id="content">
        </section>
    </main>
</template>

<style scope>
main {
    position: absolute;
    top: 0;
}

#content {
    padding-top: 100vh;
}
</style>

<script>
import Header from '@/components/Header.vue';

export default {
    name: 'HomeView',
    components: {
        Header
  }
}
</script>

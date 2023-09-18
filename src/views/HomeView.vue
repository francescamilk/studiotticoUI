<template>
    <main id="home">
        <Header />
    </main>
</template>

<style>
#home {
    padding-bottom: 100vh;
}
</style>

<script>
import Header from '@/components/Header';

export default {
    name: 'HomeView',
    components: {
        Header
  }
}
</script>

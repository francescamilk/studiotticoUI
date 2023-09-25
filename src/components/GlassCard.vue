<template>
    <div class="glassCard">
        <img :src="glass.photos[0]" alt="Glass Image" />
        <h3>{{ glass.brand }}</h3>
        <h3>€{{ glass.price }}</h3>
    </div>
</template>

<style scoped lang="scss">
.glassCard {
    display: flex;
    flex-direction: column;
    align-items: center;


    img {
        width: 23rem;
    }

    h3 {
        margin: 0;
        padding: 0;
    }
}
</style>

<script>
export default {
    name: 'GlassCard',
    props: {
        glass: Object
    }
}
</script>
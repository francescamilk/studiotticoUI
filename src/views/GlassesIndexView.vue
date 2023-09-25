<template>
    <main id="glasses#index">
        <h1>Montature da vista</h1>
        <ul>
            <li>CLIENTELA <i class="fa-solid fa-chevron-down"></i></li>
            <li>MARCHIO <i class="fa-solid fa-chevron-down"></i></li>
            <li>FORMA <i class="fa-solid fa-chevron-down"></i></li>
            <li>COLORE <i class="fa-solid fa-chevron-down"></i></li>
            <li>PREZZO <i class="fa-solid fa-chevron-down"></i></li>
            <li>ORDINA PER <i class="fa-solid fa-chevron-down"></i></li>
        </ul>
        <div class="glassesGrid">
            <div class="glassCard" v-for="glass in glasses" :key="glass.id">
                <GlassCard :glass="glass" />
            </div>
        </div>
    </main>
</template>

<style scoped lang="scss">
@import '@/assets/config/variables.scss';

h1 {
    font-size: $bigTitle;
}

ul {
    li {
        display: inline-block;
        font-family: $headersFont;
        margin-right: 4rem;
        cursor: pointer;
    }
}
.glassesGrid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 6rem;
    margin-top: 4rem;
}

.glassCard {
    cursor: pointer;
    transition: transform 0.3s ease;
    
    &:hover {
        transform: scale(1.05);
    }
}
</style>

<script>
import axios from 'axios'
import GlassCard from '@/components/GlassCard.vue'

export default {
    name: 'GlassesIndexView',
    data() {
        return {
            glasses: []
        }
    },
    methods: {
        fetchGlasses() {
            axios
            .get('https://studiotticoapi-55b32c499871.herokuapp.com/api/v1/glasses', {
                headers: {
                    Accept: 'application/json'
                }
            })
            .then(response => {
                this.glasses = response.data
            })
        },
    },
    mounted() {
        this.fetchGlasses()
    },
    components: {
        GlassCard
    }
}
</script>

<template>
    <main id="glasses#index">
        <h1>Montature da vista</h1>
        <ul>
            <li v-for="glass in glasses" :key="glass.id">{{ glass.name }}</li>
        </ul>
    </main>
</template>

<style>
</style>

<script>
import axios from 'axios';

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
    }
}
</script>

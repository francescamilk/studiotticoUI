<template>
    <nav>
        <router-link to="/"><i class="fa-solid fa-glasses"></i></router-link>

        <div>
            <ul class="navigation">
                <li><h4>Lo studio</h4></li>
                <li><h4>Servizi</h4></li>
                <li @mouseenter="showDropdown = true">
                    <h4><router-link to="/glasses">Shop</router-link></h4>
                </li>
                <li><h4>Contatti</h4></li>
            </ul>

        </div>
    </nav>

    <div class="dropdownWrapper" v-if="showDropdown" @mouseleave="showDropdown = false">
        <div class="dropdown">
            <div class="dropdownColumns">
                <div>
                    <h4>Per genere</h4>
                    <ul>
                        <li>Unisex</li>
                        <li>Da donna</li>
                        <li>Da uomo</li>
                        <span>-</span>
                        <li>Accessori</li>
                        <li>Novità</li>
                    </ul>
                </div>
                <div>
                    <h4>Per stile</h4>
                    <ul>
                        <li>Aviatore</li>
                        <li>Arrotondati</li>
                        <li>Cat-eye</li>
                        <li>Farfalla</li>
                        <li>Quadrati</li>
                        <li>Rettangolari</li>
                        <li>Titanio</li>
                    </ul>
                </div>
                <div>
                    <h4>Per marchio</h4>
                    <ul>
                        <li>Armani</li>
                        <li>Burberry</li>
                        <li>Mont Blanc</li>
                        <li>Persol</li>
                        <li>Polaroid</li>
                        <li>Prada</li>
                        <li>Ralph Lauren</li>
                        <li>Ray-Ban</li>
                        <li>Valentino</li>
                        <li>Versace</li>
                        <li>Vogue</li>
                    </ul>
                </div>
            </div>
            <ul>
                <li><h5><router-link to="/glasses">> Mostra tutto</router-link></h5></li>
            </ul>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import '@/assets/config/variables.scss';

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

li, i {
    cursor: pointer;
}

.navigation li {
    display: inline;

    h4 {
        display: inline-block;
        font-family: 'OpticianSans', 'Poppins', sans-serif;
        margin-left: 1rem;
    }
}

.dropdownWrapper {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    position: relative;
}

.dropdown {
    position: absolute;
    background: white;
    border-radius: 2px;
    z-index: 1001;
    padding-left: 1rem;
    padding-bottom: 1rem;

    h5 {
        margin-bottom: 0;
    }
}

.dropdownColumns {
    display: flex;

    div:nth-child(2),
    div:nth-child(3) {
        margin-left: 3rem;
    }

    h4 {
        font-family: 'OpticianSans', 'Poppins', sans-serif;
    }

    li {
        margin-bottom: .4rem;
    }
}
</style>

<script>
export default {
    name: 'NavBar',
    data() {
        return {
            showDropdown: true,
        }
    }
}
</script>
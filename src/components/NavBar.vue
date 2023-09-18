<template>
    <nav>
        <i class="fa-solid fa-glasses"></i>
        
        <div>
            <ul class="navigation">
                <li><h4>Lo studio</h4></li>
                <li><h4>Servizi</h4></li>
                <li @mouseenter="showDropdown = true"><h4>Shop</h4></li>
                <li><h4>Contatti</h4></li>
            </ul>
            
        </div>
    </nav>

    <div class="dropdownWrapper" v-if="showDropdown" @mouseenter="showDropdown = true" @mouseleave="showDropdown = false">
        <div class="dropdown">
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
    display: flex;
    position: absolute;

    div {
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
            showDropdown: false,
        }
    }
}
</script>
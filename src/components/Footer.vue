<template>
    <footer>
        <div class="mainContent">
            <div>
                <div class="subContent">
                    <div class="navigation">
                        <h3>Menu</h3>
                        <ul>
                            <li>Servizi</li>
                            <li><router-link to="/glasses">Shop</router-link></li>
                            <li>Contatti</li>
                            <span>-</span>
                            <li>FAQ Ordini</li>
                            <li>FAQ Spedizioni</li>
                            <li>Termini & Condizioni</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Contatti</h3>
                        <ul class="contacts">
                            <li>
                                <h5>Telefono</h5>
                                <p>+39 339 4840509</p>
                            </li>
                            <li>
                                <h5>E-mail</h5>
                                <p>scrivici@studiottico.it</p>
                            </li>
                            <li>
                                <h5>Info ordini</h5>
                                <p>ordini@studiottico.it</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="disclaimer">
                <h3>STUDIOTTICO SRL</h3>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br><br>
                    Quisquam quam, commodi totam et unde exercitationem sed enim, cum natus, aut officia. Autem, dicta. Tenetur id accusamus harum. Illo, reiciendis impedit. <br><br>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi exercitationem maxime praesentium veniam temporibus aliquid neque maiores aut laborum ut a veritatis pariatur minus ipsam similique sit, animi quisquam molestiae? <br><br>
                </p>
            </div>
        </div>
        <div class="copyright">
            <!-- <span>
                STUDIOTTICO SRL <br>
                Sede Legale: Città del portfolio (TO) CAP 10139 <br>
                CAP SOC. €10.000 | REA 123123 | Sono solo un portfolio
            </span> -->
            <span>
                Copyright 2023 © francescamilk x Studiottico
            </span>
        </div>
    </footer>
</template>

<style scoped lang="scss">
footer {
    padding: 6rem 0 2rem;
}

.mainContent,
.subContent {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.navigation li {
    cursor: pointer;
    margin-bottom: .4rem;
}

.disclaimer p {
    text-align: justify;
}

.contacts {
    h5 {
        margin-bottom: .5rem;
    }

    p {
        margin-top: 0;
    }
}

.copyright {
    text-align: center;
    padding-top: 2rem;

    span {
        letter-spacing: .2rem;
        font-size: .7rem;
    }
}
</style>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Footer'
}
</script>
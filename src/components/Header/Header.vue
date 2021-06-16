<template>
    <header>
        <nav class="container">
            <a href="/">
                <img alt="logo" id="logo" src="../../assets/logo.png" />
            </a>

            <h2>Fuxiquinho</h2>

            <img v-on:click="openMenu" alt="menu" id="menu-button" src="../../assets/menu.png" />

            <div v-on:click="closeMenu" id="menu-overlay" v-if="menuActive"></div>
            <div id="menu-items" :class="{active:menuActive}">

                <img alt="menu-logo" id="menu-logo" src="../../assets/logo.png" />
                <ul>    
                    <router-link to="/">Inicio</router-link>        
                    <router-link to="/nova">Nova Fofoquinha</router-link>        
                    <router-link to="/sobre">Sobre</router-link>        
                    <router-link to="/contato">Contato</router-link>        
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            menuActive: false
        }
    },
    methods: {
        openMenu: function() {
            this.menuActive = true
        },
        closeMenu: function() {
            this.menuActive = false
        }
    }
}
</script>

<style scoped>
    header {
        background-color: orange;
        height: 60px;
        width: 100%;
        display: flex;
        justify-content: center;
    }

    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 60px;
    }

    #logo {
        width: 50px;
    }

    #menu-logo {
        width: 100px;
        margin-top: 30px;
        margin-bottom: 10px;
    }

    #menu-button {
        width: 30px;
        height: 30px;
    }

    #menu-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 40%;
        height: 100vh;
        background-color: #000000;
        opacity: 0.8;
    }

    #menu-items {
        position: fixed;
        top: 0;
        right: 0;
        background-color: orange;
        width: 60%;
        height: 100vh;
        display: none;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }

    #menu-items.active {
        display: flex;
    }

    ul {
        list-style: none;    
        text-align: center;
    }

    ul li {
        margin: 20px 0px;
    }

    ul li a {
        color: white;
    }

    h2 {
        color: white;
        font-family: Verdana;
    }

    @media (min-width: 700px) {
        #menu-button,
        #menu-logo,
        #menu-overlay {
            display: none;
        }

        #menu-items {
            display: flex;
            position: static;
            height: 60px;
            width: auto;
        }

        ul {
            display: flex;
            flex-direction: row;
            height: 60px;
            align-items: center;
        }

        ul  li {
            margin: 0;
            margin-left: 20px;            
        }
    }
</style>
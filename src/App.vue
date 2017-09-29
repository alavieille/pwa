<template>
    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header class="mdl-layout__header">
            <div class="mdl-layout__header-row">
                <span class="mdl-layout-title">Application</span>.
            </div>
        </header>
        <div class="mdl-layout__drawer">
            <span class="mdl-layout-title">Application</span>
            <nav class="mdl-navigation">
                <router-link class="mdl-navigation__link" :to='{ name: "notes"}' @click.native="hideMenu">Notes</router-link>
                <router-link class="mdl-navigation__link" :to='{ name: "camera"}' @click.native="hideMenu">Camera</router-link>
                <router-link class="mdl-navigation__link" :to='{ name: "call"}' @click.native="hideMenu">Appeler</router-link>
                <router-link class="mdl-navigation__link" :to='{ name: "location"}' @click.native="hideMenu">Localisation</router-link>
            </nav>
            <span class="status-network mdl-typography--text-center">
                <span v-if="online" class="online">En ligne</span>
                <span v-else class="offline">Hors ligne</span>
            </span>
        </div>
        <main class="mdl-layout__content">
            <router-view></router-view>
        </main>
    </div>
</template>

<script type="text/babel">
    export default {
        name: 'app',
        computed: {
            online: () => {
                return navigator.onLine;
            }
        },
        methods: {
            hideMenu: function () {
                document.getElementsByClassName('mdl-layout__drawer')[0].classList.remove('is-visible')
                document.getElementsByClassName('mdl-layout__obfuscator')[0].classList.remove('is-visible')
            }
        }
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
    .online {
        color: #4CAF50;
    }
    .offline {
        color: #F44336;
    }
</style>

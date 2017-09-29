<template>
    <form>
        <div class="mdl-grid">
            <div class="form-add mdl-cell mdl-cell--5-col">
                <div>
                    <h2>Ajouter une note</h2>
                </div>
                <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                    <input class="mdl-textfield__input" type="text" id="title" v-model="title">
                    <label class="mdl-textfield__label" for="title">Titre</label>
                </div>
                <div class="mdl-textfield mdl-js-textfield">
                    <textarea class="mdl-textfield__input" v-model="content"  type="text" rows= "3" id="content" ></textarea>
                    <label class="mdl-textfield__label" for="content">Contenu</label>
                </div>
               <div class="actions">
                    <a @click.prevent="addNote" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
                        <span>Ajouter</span>
                    </a>
                   <router-link
                           class="mdl-button mdl-js-button mdl-button--raised mdl-button--accent"
                           :to='{ name: "notes"}'
                   >
                       <span>Annuler</span>
                   </router-link>
                </div>
            </div>
        </div>
    </form>
</template>

<script>
    export default {
        name: 'add-note',
        data () {
            return {
                'content': '',
                'title': ''
            }
        },
        methods: {
            addNote () {
                this.$store.commit('note/addNote', {title: this.title, content: this.content});
                this.$router.push('/');
            }
        }
    }
</script>

<style>
    .form-add {
        margin: auto;
    }
    .form-add .mdl-textfield{
        width:100%;
    }
</style>

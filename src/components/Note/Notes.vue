<template>
  <div>
      <div class="notes mdl-grid">
          <note
              v-for="(note, key) in note.notes"
              :title="note.title"
              :content="note.content"
              :key='key'
          >
          </note>
      </div>
      <p v-if="note.notes.length === 0 " class="mdl-typography--text-center">
          Aucune notes
      </p>
      <router-link
          class="button-add-note mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored"
          :to='{ name: "add-note"}'
      >
          <i class="material-icons">add</i>
      </router-link>
  </div>
</template>

<script type="text/babel">
    import Note         from './Note';
    import { mapState } from 'vuex'

    export default {
        name: 'notes',
        components: {
            'note': Note
        },
        computed: {
            ...mapState({
                note: 'note'
            })
        },
        mounted () {
            this.$store.commit('fetch/notes');
        },
    }
</script>

<style>
    .button-add-note {
        position: fixed;
        display: block;
        right: 0;
        bottom: 0;
        margin-right: 40px;
        margin-bottom: 40px;
        z-index: 900;
    }
</style>

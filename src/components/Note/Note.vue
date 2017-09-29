<template>
  <div class="mdl-cell mdl-cell--4-col">
      <div class="mdl-card mdl-shadow--2dp">
          <div class="mdl-card__title">
              <h2 class="mdl-card__title-text">{{ title }}</h2>
          </div>
          <div class="mdl-card__supporting-text">
              {{ content }}
          </div>
      </div>
  </div>
</template>

<script>
    export default {
        name: 'note',
        props: ['title', 'content']
    }
</script>

<style>
    .mdl-card {
        width: 100%;
    }
</style>

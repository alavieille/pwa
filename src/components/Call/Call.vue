<template>
    <div class="mdl-grid">
        <div class="form-add mdl-cell mdl-cell--5-col">
            <h4>Téléphone</h4>
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                <input class="mdl-textfield__input" type="tel" id="tel" v-model="tel" required>
                <label class="mdl-textfield__label" for="tel">Numéro</label>
            </div>
            <a :href="'tel:'+tel" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
                <span>Appeler</span>
            </a>
        </div>
        <div class="form-add mdl-cell mdl-cell--5-col">
            <h4>Sms</h4>
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                <textarea class="mdl-textfield__input" id="sms" v-model="sms" rows= "3"></textarea>
                <label class="mdl-textfield__label" for="sms">Sms</label>
            </div>
            <a :href="'sms:'+tel+'?body='+sms" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
                <span>Envoyer</span>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Call',
        data () {
            return {
                tel: null,
                sms: null
            }
        }
    }
</script>

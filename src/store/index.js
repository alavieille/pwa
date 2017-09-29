import Vue  from 'vue'
import Vuex from 'vuex'

import Note from './modules/Note'

Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,
    modules: {
        note : Note
    }
})

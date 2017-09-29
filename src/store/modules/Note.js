import Vue from 'vue';

export default {
    state: {
        notes: []
    },
    mutations: {
        'note/addNote': (state, data) => {
            state.notes.push(data);
            localStorage.setItem('notes', JSON.stringify(state.notes));
        },
        'fetch/notes' : (state) => {
            let notes = localStorage.getItem('notes');
            if (null !== notes) {
                state.notes = JSON.parse(notes);
            }
        }
    }

}

import {defineStore} from "pinia";
import {computed, ref} from "vue";

export const useNotesStore = defineStore('notes', () => {

    const notes = ref(
        [
            {
                id: 'id1',
                content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem ipsa commodi sint ut ullam culpa nulla molestiae sunt quia qui maxime, enim quasi officiis aperiam fugit, corrupti omnis, eaque animi.'
            },
            {
                id: 'id2',
                content: 'This is a shorter note! Woo!'
            }
        ]
    );

    /* getters */

    const getNoteContent = computed(() => {
        return (id) =>  notes.value.filter((note) => note.id === id)[0].content
    })

    const totalNotesCount = computed(() => {
            return notes.value.length
    });

    const totalCharactersCount = computed(() => {
        let count = 0;

        notes.value.forEach(note => {
            count += note.content.length
        })

        return count;
    })


    /* methods */

    const addNote = (newNoteContent) => {
        let currentDate = new Date().getTime();
        let id = currentDate.toString()

        let note = {
            id,
            content: newNoteContent
        }

        notes.value.unshift(note);

    }

    const deleteNote = (idToDelete) => {
        notes.value = notes.value.filter(note => note.id !== idToDelete)
    }

    const updateNote = (id, content) => {
        let index = notes.value.findIndex(note => note.id === id);

        notes.value[index].content = content
    }

    return {
        notes,
        getNoteContent,
        totalNotesCount,
        totalCharactersCount,
        addNote,
        deleteNote,
        updateNote
    }
})
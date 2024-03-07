import {defineStore} from "pinia";
import {ref} from "vue";

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
        notes.value = notes.value.filter(note => {
            return note.id !== idToDelete
        })
    }

    return {
        notes,
        addNote,
        deleteNote
    }
})
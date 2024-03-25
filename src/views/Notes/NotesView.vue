<script setup>
import {ref} from "vue";
  import Note from "@/components/Notes/Note.vue";
  import { useNotesStore } from "@/stores/NotesStore.js";
  import AddEditNote from "@/components/Notes/AddEditNote.vue";
  import { useWatchCharacters } from "@/use/useWatchCharacter.js";

const newNote = ref('');

  const addEditNoteRef = ref(null);

  const storeNotes = useNotesStore();

  const addNote = () => {
    storeNotes.addNote(newNote.value)
    newNote.value = '';
    addEditNoteRef.value.focusTextarea();
  }

  /*
    watch characters
  */
  useWatchCharacters(newNote, 100)

</script>

<template>
  <AddEditNote
      v-model="newNote"
      ref="addEditNoteRef"
      placeholder="Add a new Note"
  >
    <template v-slot:buttons>
      <button
          @click="addNote"
          :disabled="!newNote"
          class="button is-link has-background-success">
        Add new Note
      </button>
    </template>
  </AddEditNote>
  <Note v-for="note in storeNotes.notes"
        :key="note.id"
        :note="note"
  />
</template>
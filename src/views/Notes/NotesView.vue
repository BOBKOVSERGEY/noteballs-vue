<script setup>
  import {ref} from "vue";
  import Note from "@/components/Notes/Note.vue";
  import { useNotesStore } from "@/stores/NotesStore.js";
  import AddEditNote from "@/components/Notes/AddEditNote.vue";

  const newNote = ref('');

  const newNoteRef = ref(null);

  const storeNotes = useNotesStore();

  const addNote = () => {
    storeNotes.addNote(newNote.value)

    newNote.value = '';

    newNoteRef.value.focus()
  }

</script>

<template>
  {{newNote}}
  <AddEditNote
      v-model="newNote"
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
  <!--<div class="card has-background-success-dark mb-4 p-4">
    <div class="field">
      <label class="label">Message</label>
      <div class="control">
        <textarea
            v-model="newNote"
            class="textarea"
            placeholder="Write a new note"
            ref="newNoteRef"
        />
      </div>
    </div>
    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <button
            @click="addNote"
            :disabled="!newNote"
            class="button is-link has-background-success">
          Add new Note
        </button>
      </div>
    </div>
  </div>-->
  <Note v-for="note in storeNotes.notes"
        :key="note.id"
        :note="note"
  />
</template>
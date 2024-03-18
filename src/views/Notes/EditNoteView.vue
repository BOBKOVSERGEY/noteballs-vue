<script setup>
import {onMounted, ref} from "vue";
import { useRoute } from "vue-router";
import { useNotesStore } from "@/stores/NotesStore.js";

import AddEditNote from "@/components/Notes/AddEditNote.vue";

/*
  router
*/
const route = useRoute();

const noteContent = ref('');
const storeNotes = useNotesStore();

const handleSaveClicked = () => {

  let payload = {
    id: route.params.id,
    content: noteContent
  }

  storeNotes.updateNote(route.params.id, noteContent.value)
}

onMounted(() => {
  //console.log(storeNotes.getNoteContent(route.params.id))
  noteContent.value = storeNotes.getNoteContent(route.params.id)
})
</script>

<template>
  <AddEditNote
      v-model="noteContent"
      ref="addEditNoteRef"
      bgColor="link"
      placeholder="Edit note"
      label="Edit Note"
  >
    <template v-slot:buttons>
      <!--<RouterLink
          :to="{ name: 'Notes' }"
          class="button is-light mr-2"
      >
        Cancel
      </RouterLink>-->
      <button
          @click.prevent="$router.back()"
          class="button is-light mr-2"
      >
        Cancel
      </button>
      <button
          @click.prevent="handleSaveClicked"
          class="button is-link has-background-link"
          :disabled="!noteContent"
      >
        Save Note
      </button>
    </template>
  </AddEditNote>
</template>
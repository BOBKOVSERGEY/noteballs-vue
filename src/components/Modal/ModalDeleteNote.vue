<script setup>
import {onMounted, onUnmounted, ref} from "vue";
import { onClickOutside } from "@vueuse/core";
import { useNotesStore} from "@/stores/NotesStore.js";

const modelValue = defineModel({
  type: Boolean,
  required: true,
  default: false
});

const props = defineProps({
  noteId: {
    type: String,
    required: true
  }
})

const storeNotes = useNotesStore();

const modalCardRef = ref(null);

/*
   close modal
 */

const closeModal = () => {
  modelValue.value = false
}

onClickOutside(modalCardRef, closeModal);

const handleKeyboard = e => {
  if(e.key === 'Escape') {
    closeModal()
  }
}

onMounted(() => {
  document.addEventListener('keyup', handleKeyboard)
})

onUnmounted(() => {
  document.removeEventListener('keyup', handleKeyboard)
})


</script>

<template>
  <div class="modal is-active p-4">
    <div class="modal-background"></div>
    <div
        ref="modalCardRef"
        class="modal-card" >
      <header class="modal-card-head">
        <p class="modal-card-title">Delete Note?</p>
        <button
            @click="closeModal"
            class="delete" aria-label="close"></button>
      </header>
      <section class="modal-card-body">
        Are you sure you want to delete this note?
      </section>
      <footer class="modal-card-foot is-justify-content-flex-end">
        <div class="buttons">
          <button
              @click="closeModal"
              class="button">Cancel</button>
          <button
              @click="storeNotes.deleteNote(noteId)"
              class="button is-danger">Delete</button>
        </div>
      </footer>
    </div>
  </div>
</template>
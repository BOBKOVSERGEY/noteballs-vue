<script setup>
  import {computed, reactive} from "vue";

  import ModalDeleteNote from "@/components/Modal/ModalDeleteNote.vue";

  const props = defineProps({
    note: {
      type: Object,
      required: true
    }
  })

  const emit = defineEmits(['deleteClicked']);


  const characterLength = computed(() => {
    let length = props.note.content.length;
    let description = length > 1 ? 'characters' : 'character'
    return `${length} ${description}`
  })

  const modal = reactive({
    deleteNote: false,
    // for example editNote: false
  });


</script>

<template>
  <div
      class="card mb-4">
    <div class="card-content">
      <div class="content">
        {{note.content}}
        <div class="has-text-right has-text-grey-light mt-2">
          <small>
            {{ characterLength }}
          </small>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <RouterLink
          :to="{
                  name: 'EditNote',
                  params: {id: note.id}
               }"
          class="card-footer-item">
        Edit
      </RouterLink>
      <a href="#"
         @click.prevent="modal.deleteNote = true"
         class="card-footer-item"
      >Delete</a>
    </footer>
    <ModalDeleteNote
      v-if="modal.deleteNote"
      v-model="modal.deleteNote"
      :noteId="note.id"
    />
  </div>
</template>

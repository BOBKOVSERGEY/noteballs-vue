<script setup>
import { useNotesStore } from "@/stores/NotesStore.js";
import { vAutofocus } from "@/directives/vAutofocus.js";
import { useWatchCharacters } from "@/use/useWatchCharacter.js";
import {ref} from "vue";

const storeNotes = useNotesStore();
const loveNoteballs = ref('');
useWatchCharacters(loveNoteballs, 50);


</script>

<template>
  <div class="stats">
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>Stat</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Number of Notes</td>
          <td>{{ storeNotes.totalNotesCount }}</td>
        </tr>
        <tr>
          <td>Number of Character</td>
          <td>{{ storeNotes.totalCharactersCount }}</td>
        </tr>
      </tbody>
    </table>
    <input
        v-model="loveNoteballs"
        class="input"
        type="text"
        placeholder="Do you love note"
        v-autofocus
    >
  </div>
</template>

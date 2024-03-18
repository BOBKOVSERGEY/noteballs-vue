<script setup>
  const modelValue = defineModel();

</script>

<template>
  <div class="card has-background-success-dark mb-4 p-4">
    <div class="field">
      <label class="label">Message</label>
      <div class="control">
        <textarea
            v-model="modelValue"
            class="textarea"
            placeholder="Write a new note"
            ref="newNoteRef"
        />
      </div>
    </div>
    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <slot name="buttons" />
      </div>
    </div>
  </div>
</template>
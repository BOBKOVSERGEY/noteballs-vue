<script setup>
  const props = defineProps({
    modelValue: {
      type: String,
      required: true
    }
  })

  const emit = defineEmits(['update:modelValue']);

  const onInput = (e) => {
    emit('update:modelValue', e.target.value)
  }
</script>

<template>
  <div class="card has-background-success-dark mb-4 p-4">
    <div class="field">
      <label class="label">Message</label>
      <div class="control">
        <textarea
            :value="modelValue"
            @input="onInput"
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
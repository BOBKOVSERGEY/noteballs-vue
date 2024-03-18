<script setup>
  import {ref} from "vue";

  const modelValue = defineModel({
    required: true
  });

  const props = defineProps({
    bgColor: {
      type: String,
      default: 'success'
    },
    placeholder: {
      type: String,
      default: 'Type something...'
    },
    label: {
      type: String
    }
  });

  const textAreaRef = ref(null);

  const focusTextarea = () => {
    textAreaRef.value.focus()
  }

  defineExpose({
    focusTextarea
  })

</script>

<template>
  <div
      class="card mb-4 p-4"
      :class="`has-background-${bgColor}-dark`"
  >
    <label v-if="label"
           class="label has-text-white">
      {{ label }}
    </label>
    <div class="field">
      <div class="control">
        <textarea
            v-model="modelValue"
            class="textarea"
            :placeholder="placeholder"
            ref="textAreaRef"
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
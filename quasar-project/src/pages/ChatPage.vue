<template>
  <div class="q-pa-md row justify-center ">
    <div style="width: 100%; max-width: 70%; margin-top:5%">
      <q-chat-message
        label="Sunday, 19th"
      />

      <q-chat-message
        name="Quasarra"
        avatar="https://cdn.quasar.dev/img/avatar1.jpg"
        :text="['hey, how are you?']"
        sent
        stamp="7 minutes ago"
      />
      <q-chat-message
        name="Jane"
        avatar="https://cdn.quasar.dev/img/avatar3.jpg"
        :text="['doing fine, how r you?']"
        stamp="4 minutes ago"
      />
      <q-chat-message
        name="Qusarra"
        avatar="https://cdn.quasar.dev/img/avatar1.jpg"
        :text="[' am fine   ']"
        sent
        stamp="1 minutes ago"
      />
      <q-input
      ref="inputRef"
      filled
      v-model="model"
    />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const inputRef = ref(null)

    return {
      model: ref(''),
      inputRef,

      reset () {
        inputRef.value.resetValidation()
      }
    }
  }
}
</script>

<style>
  #ip {
    margin-top: 3%;
  }
</style>

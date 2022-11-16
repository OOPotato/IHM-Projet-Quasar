<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md column" style="width: 400px;left: 45%;position: absolute;">

      <q-input outlined v-model="textname" placeholder="quasar" label="name" />
      <q-input outlined v-model="textage" placeholder="20" label="age" />
      <q-input outlined v-model="textphone" placeholder="0660123421" label="phone number" />
      <q-input outlined v-model="textemail" placeholder="quasar@gmail.com" label="email" />
      <q-btn push color="white" text-color="primary" label="Submit" />
    </div>
  </div>
</template>



<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      textname: ref(''),
      textage: ref(''),
      textphone: ref(''),
      textemail: ref(''),


    }
  }
}
</script>

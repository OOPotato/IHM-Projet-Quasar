<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md column" style="width: 400px;left: 45%;position: absolute;">
      <q-avatar>
      <img src="https://cdn.quasar.dev/img/avatar.png">
      </q-avatar>
      <q-label>Change your image profile</q-label>
      <q-file
        v-model="files"
        label="Pick files"
        filled
        counter
        :counter-label="counterLabelFn"
        max-files="3"
        multiple
        style="max-width: 300px"
      >
        <template v-slot:prepend>
          <q-icon name="attach_file" />
        </template>
      </q-file>
      <q-input outlined v-model="textname" placeholder="Quasarra" label="Name" />
      <q-input outlined v-model="textage" placeholder="20" label="Age" />
      <q-input outlined v-model="textphone" placeholder="0660123421" label="Phone number" />
      <q-input outlined v-model="textemail" placeholder="quasar@gmail.com" label="Email" />
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
      files: ref(null),
      counterLabelFn ({ totalSize, filesNumber, maxFiles }) {
        return `${filesNumber} files of ${maxFiles} | ${totalSize}`}


    }
  }
}
</script>

<template>
  <div class="q-pa-md center" style="width: 500px;height: 25%;">

    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="name"
        label="User name :"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'something wrong']"
      />

      <q-input
        filled
        v-model="age"
        label="Password :"
      />

      <!-- <q-toggle v-model="accept" label="Remember me" /> -->

      <div>
        <q-btn label="Submit" type="submit" color="primary" />
        <q-btn label="Cancel" type="reset" color="primary" flat class="q-ml-sm" />
        <!-- <q-btn label="Sign up" onclick="signup()" color="primary" flat class="q-ml-sm"/> -->

      </div>
    </q-form>

  </div>
</template>

<script>
import { useQuasar } from 'quasar'
import { ref } from 'vue'

export default {
  setup () {
    const $q = useQuasar()

    const name = ref(null)
    const age = ref(null)
    const accept = ref(false)

    return {
      name,
      age,
      accept,

      onSubmit () {
        window.open('http://localhost:8080/#/login','_self');
      },

      onReset () {
        name.value = null
        age.value = null
        accept.value = false
      },

      signup (){
        window.open('http://localhost:8080/#/signup','_self');
      }
    }
  }
}
</script>

<style>
  .center {
    position: absolute;
    left: 40%;
    top:30%;
    border:solid rgb(135, 135, 175) 1px;
    border-radius: 2%;
  }
</style>

<template>
  <div class="q-pa-md q-gutter-y-sm column">
    <q-toggle
      :label="blueModel"
      color="blue"
      false-value="Anyone can see your photo."
      true-value="Anyone can see your photo"
      v-model="blueModel"
    />

    <q-toggle
      :label="redModel"
      color="blue"
      false-value="Your friends can see your photo."
      true-value="Your friends can see your photo"
      v-model="redModel"
    />

    <q-toggle
      :label="pinkModel"
      color="blue"
      false-value="Anyone can send you a message."
      true-value="Anyone can send you a message"
      v-model="pinkModel"
    />

    <q-toggle
      :label="greenModel"
      color="blue"
      false-value="Your friends can send you a message."
      true-value="Your friends can send you a message"
      v-model="greenModel"
    />

    <q-toggle
      :label="orangeModel"
      color="blue"
      false-value="Anyone can see your profile."
      true-value="Anyone can see your profile"
      v-model="orangeModel"
    />

    <q-toggle
      :label="darkModel"
      color="blue"
      false-value="Your friends can see your profile."
      true-value="Your friends can see your profile"
      v-model="darkModel"
    />


  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      blueModel: ref('Anyone can see your photo'),
      pinkModel: ref('Anyone can send you a message'),
      greenModel: ref('Your friends can send you a message'),
      redModel: ref('Your friends can see your photo'),
      orangeModel: ref('Anyone can see your profile'),
      darkModel: ref('Your friends can see your profile')
    }
  }
}
</script>

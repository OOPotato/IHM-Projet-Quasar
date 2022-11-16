<template>

  <q-item
    clickable
    tag="a"

    :href="link"
  >
    <q-item-section>
      <q-item-label>{{ title }} <q-icon :name="icon" /> </q-item-label>
    </q-item-section>

  </q-item>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'EssentialLink',
  props: {
    title: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      default: ''
    },
    link:{
      type: String,
      default:''
    }
  }
})
</script>

<style scoped>
  * {
    text-align: center;
    font-size: 12px;
    color: red;
  }

</style>

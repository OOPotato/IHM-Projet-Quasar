<template>
  <q-item
    clickable
    tag="a"
    :href="link"
    style="marginleft:30%"
  >
  <q-item-section
      v-if="icon"
      avatar
  >
  <q-icon :name="icon" />
  </q-item-section>

  <q-item-section>
    <q-item-label>{{ title }}
      <q-icon v-if="title == 'Messages' || title =='Notifications' " name="info" color="blue" />
    </q-item-label>
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

    caption: {
      type: String,
      default: ''
    },

    link: {
      type: String,
      default: '#'
    },

    icon: {
      type: String,
      default: ''
    }
  }
})
</script>

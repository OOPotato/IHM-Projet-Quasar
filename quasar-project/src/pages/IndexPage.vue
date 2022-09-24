<template>
  <q-page class="flex-center">
  <ul>
    <li>
    <q-card class="my-card">
      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar1.jpg">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>mari</q-item-label>
          <q-item-label caption>so beautiful</q-item-label>
        </q-item-section>
      </q-item>

      <img src="https://cdn.quasar.dev/img/parallax1.jpg" style="width:45%;height: 250px; margin-left: 30%; margin-bottom: 10px;">

      <q-btn-group push style="margin-left: 32%;">
        <q-btn push label="like" icon = "favorite" />
        <q-btn push label="share" icon = "share" />
        <q-btn push label="comment" icon = "chat" />
      </q-btn-group>
    </q-card>
    </li>
    <li>
    <q-card class="my-card">
      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar2.jpg">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>luci</q-item-label>
          <q-item-label caption>nice photo</q-item-label>
        </q-item-section>
      </q-item>

      <img src="https://cdn.quasar.dev/img/parallax2.jpg" style="width:45%;height: 250px; margin-left: 30%; margin-bottom: 10px;">

      <q-btn-group push style="margin-left: 32%;">
        <q-btn push label="like" icon = "favorite" />
        <q-btn push label="share" icon = "share" />
        <q-btn push label="comment" icon = "chat" />
      </q-btn-group>
    </q-card>
    </li>
    <li>
    <q-card class="my-card">
      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar3.jpg">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>Quantin</q-item-label>
          <q-item-label caption>so good</q-item-label>
        </q-item-section>
      </q-item>

      <img src="https://cdn.quasar.dev/img/parallax1.jpg"  style="width:45%;height: 250px; margin-left: 30%; margin-bottom: 10px;">

      <q-btn-group push style="margin-left: 32%;">
        <q-btn push label="like" icon = "favorite" />
        <q-btn push label="share" icon = "share" />
        <q-btn push label="comment" icon = "chat" />
      </q-btn-group>
    </q-card>
    </li>

  </ul>
</q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage',
  data () {
    return {
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  }
})
</script>

<style scoped>
  .my-card {
    width: 75%;
    height: 22%;
  }
  li {
    margin-top: 10px;
    margin-left: 20%;
    list-style: none;
  }
</style>

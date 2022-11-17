<template>
  <div class="q-pa-md q-gutter-y-md">

    <q-item clickable v-ripple>
      <q-item-section side>
        <q-avatar rounded size="48px">
          <img src="https://cdn.quasar.dev/img/avatar.png" />
          <q-badge floating color="teal">new</q-badge>
        </q-avatar>
      </q-item-section>
      <q-item-section>
        <q-item-label>Marry</q-item-label>
        <q-item-label caption>2 new messages</q-item-label>
      </q-item-section>
      <q-item-section side>
        3 min ago
      </q-item-section>
    </q-item>

    <q-item clickable v-ripple  @click="onClick()">
      <q-item-section side>
        <q-avatar rounded size="48px">
          <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
          <q-badge floating color="teal">new</q-badge>
        </q-avatar>
      </q-item-section>
      <q-item-section>
        <q-item-label>kary</q-item-label>
        <q-item-label caption>1 new messages</q-item-label>
      </q-item-section>
      <q-item-section side>
        10 min ago
      </q-item-section>
    </q-item>


  </div>
</template>


<script>

export default {
  setup () {
    return {
      onClick () {
        window.open('http://localhost:8080/#/chat','_self');

      }
    }
  }
}
</script>

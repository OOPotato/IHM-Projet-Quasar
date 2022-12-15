<template>
  <div class="q-pa-md q-gutter-y-md">
      <q-avatar
      v-for="n in 5"
      :key="n"
      size="40px"
      class="overlapping"
      :style="`left: ${n * 3}px`"
    >
      <img :src="`https://cdn.quasar.dev/img/avatar${n + 1}.jpg`">
    </q-avatar>
      <q-item-label style="position:absolute;left:540px;top:70px">liked your photo</q-item-label>

    <q-item clickable v-ripple>
      <q-item-section side>
        <q-avatar rounded size="48px">
          <img src="https://cdn.quasar.dev/img/avatar.png" />
          <q-badge floating color="teal">new</q-badge>
        </q-avatar>
      </q-item-section>
      <q-item-section>
        <q-item-label>Marry</q-item-label>
        <q-item-label caption>Wrote a comment: It's very good</q-item-label>
      </q-item-section>
      <q-item-section side>
        3 min ago
      </q-item-section>
    </q-item>

    <q-item clickable v-ripple id="chatshow">
      <q-item-section side>
        <q-avatar rounded size="48px">
          <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
          <q-badge floating color="teal">new</q-badge>
        </q-avatar>
      </q-item-section>
      <q-item-section>
        <q-item-label>kary</q-item-label>
        <q-item-label caption>Wrote a comment : Wonderful</q-item-label>
      </q-item-section>
      <q-item-section side>
        12 min ago
      </q-item-section>
    </q-item>



  </div>


</template>



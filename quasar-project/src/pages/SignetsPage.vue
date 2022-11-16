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
          <q-item-label>marine</q-item-label>
          <q-item-label caption>hahaha</q-item-label>
        </q-item-section>
      </q-item>

      <img src="https://cdn.quasar.dev/img/parallax1.jpg" style="width:45%;height: 250px; margin-left: 30%; margin-bottom: 10px;">

      <q-btn-group push style="margin-left: 32%;">
        <q-rating push  icon = "favorite" v-model="ratingModel"
        size="2em"
        :max="1"
        color="primary"/>

        <q-rating push  icon = "bookmark" v-model="ratingModel2"
        size="2em"
        :max="1">
        </q-rating>
      </q-btn-group>

      <q-form @submit="onSubmit" class="q-gutter-md">
      <q-input
        size="2.5em"
        name="name"
        v-model="name"
        color="primary"
        label="comment"
        filled
        clearable
      />
    </q-form>
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
          <q-item-label>lucas</q-item-label>
          <q-item-label caption>happy new year</q-item-label>
        </q-item-section>
      </q-item>

      <img src="https://cdn.quasar.dev/img/parallax2.jpg" style="width:45%;height: 250px; margin-left: 30%; margin-bottom: 10px;">

      <q-btn-group push style="margin-left: 32%;">
        <q-rating push  icon = "favorite" v-model="ratingModel3"
        size="2em"
        :max="1"
        color="primary"/>

        <q-rating push  icon = "bookmark" v-model="ratingModel4"
        size="2em"
        :max="1">
        </q-rating>
      </q-btn-group>

      <q-form @submit="onSubmit" class="q-gutter-md" >
      <q-input
        size="2.5em"
        name="name"
        v-model="name1"
        color="primary"
        label="comment"
        filled
        clearable
      />

    </q-form>
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
          <q-item-label>Queen</q-item-label>
          <q-item-label caption>i'm love it</q-item-label>
        </q-item-section>
      </q-item>

      <img src="https://cdn.quasar.dev/img/parallax1.jpg"  style="width:45%;height: 250px; margin-left: 30%; margin-bottom: 10px;">

      <q-btn-group push style="margin-left: 32%;">
        <q-rating push  icon = "favorite" v-model="ratingModel5"
        size="2em"
        :max="1"
        color="primary"/>

        <q-rating push  icon = "bookmark" v-model="ratingModel6"
        size="2em"
        :max="1">
        </q-rating>
      </q-btn-group>

      <q-form @submit="onSubmit" class="q-gutter-md">
      <q-input
        size="2.5em"
        name="name"
        v-model="name2"
        color="primary"
        label="comment"
        filled
        clearable
      />
    </q-form>
    </q-card>

    </li>

  </ul>
</q-page>
</template>

<script>
import { defineComponent } from 'vue'
import { ref } from 'vue'

export default defineComponent({
  name: 'IndexPage',
  setup (){
      const submitResult = ref([])
      return {
        ratingModel: ref(4),
        ratingModel2: ref(3),
        ratingModel3: ref(4),
        ratingModel4: ref(3),
        ratingModel5: ref(4),
        ratingModel6: ref(3),
        label: ref('Comment'),

        name: ref(' '),
        name1: ref(' '),
        name2: ref(' '),
        submitResult,
        onSubmit (evt) {
          const formData = new FormData(evt.target)
          const data = []

          for (const [ name, value ] of formData.entries()) {
            data.push({
              name,
              value
            })
          }
          submitResult.value = data
        }
      }
    },
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

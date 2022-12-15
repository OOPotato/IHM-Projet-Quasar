<template>
  <q-page class="flex-center">
    <div id="box">
      <div class="q-gutter-md">
        <div class="cursor-pointer" style="width: 100px;text-align: center;">
          {{ labelPost }}
          <q-icon name="event" />

          <q-popup-edit v-model="labelPost" class="bg-accent text-white" v-slot="scope">
            <q-input dark color="white" v-model="scope.value" dense autofocus counter @keyup.enter="scope.set">
              <template v-slot:append>
                <q-icon name="edit" />
              </template>
            </q-input>
            <q-input
              @update:model-value="val => { file = val[0] }"
              filled
              type="file"
            />
          </q-popup-edit>



        </div>


      </div>
    </div>

    <ul>
    <li>
    <q-card class="my-card">
      <q-item>
        <q-item-section avatar>

        <q-popup-edit v-model="label2" :cover="false" :offset="[0, 10]" v-slot="scope">
          <q-input color="accent" v-model="scope.value" dense autofocus counter @keyup.enter="scope.set">
            <template v-slot:prepend>
              <q-icon name="record_voice_over" color="accent" />
            </template>
          </q-input>
        </q-popup-edit>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar1.jpg">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>Maria</q-item-label>
          <q-item-label caption>so beautiful</q-item-label>
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
        label="Comment"
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
          <q-item-label>Luci</q-item-label>
          <q-item-label caption>nice photo</q-item-label>
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

      <q-form @submit="onSubmit" class="q-gutter-md">
      <q-input
        size="2.5em"
        name="name"
        v-model="name1"
        color="primary"
        label="Comment"
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
          <q-item-label>Quentin</q-item-label>
          <q-item-label caption>so good</q-item-label>
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
        label="Comment"
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
        labelPost: ref('Quick post'),
        ratingModel: ref(4),
        ratingModel2: ref(3),
        ratingModel3: ref(4),
        ratingModel4: ref(3),
        ratingModel5: ref(4),
        ratingModel6: ref(3),
        label: ref('Comment'),
        label2: ref(''),

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

  #box{

    width: 150px ;
    height: 40px;
    margin-left:45%;
    margin-bottom:3%;
    margin-top:5%;
    font-size: 20px;
    border-radius: 5px;

    color: rgb(108, 115, 183);

  }
</style>


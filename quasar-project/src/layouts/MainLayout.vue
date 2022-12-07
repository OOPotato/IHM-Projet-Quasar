<template>
  <q-layout view="lhh Lpr lFf">
    <q-header elevated>
      <q-toolbar>

    <q-avatar>
      <img src="https://cdn.quasar.dev/img/avatar.png">
    </q-avatar>
    <p style="margin:1%">Quasarra</p>

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />

        <q-toolbar-title style="margin-top : 40%;margin-bottom : 8%;text-align: center;">
          Tendances Now
        </q-toolbar-title>
        <HotLink
          v-for="links in hotLinks"
          :key="links.title"
          v-bind="links"
        />
        <!-- <p style="text-align: center;color: blue; cursor: pointer;"> Voir plus</p> -->
      </q-list>
    </q-drawer>

    <q-page-container>
      <div id="box">

    <div class="q-gutter-md">
      <div class="cursor-pointer" style="width: 100px;text-align: center;">
        {{ label }}
        <q-icon name="event" />

        <q-popup-edit v-model="label" class="bg-accent text-white" v-slot="scope">
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

      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'
import HotLink from 'components/HotLink.vue'

const linksList = [
  {
    title: 'Accueil',
    caption: 'quasar.dev',
    icon: 'home',
    link: 'http://localhost:8080/#'
  },
  // {
  //   title: 'Explorer',
  //   caption: 'github.com/quasarframework',
  //   icon: 'explore',
  //   link: 'https://github.com/quasarframework'
  // },
  {
    title: 'Notification',
    caption: 'chat.quasar.dev',
    icon: 'circle_notifications',
    link: 'http://localhost:8080/#/notification'
  },
  {
    title: 'Messages',
    caption: 'forum.quasar.dev',
    icon: 'chat',
    link: 'http://localhost:8080/#/messages'
  },
  {
    title: 'Signets',
    caption: '@quasarframework',
    icon: 'bookmark',
    link: 'http://localhost:8080/#/signets'
  },
  // {
  //   title: 'Listes',
  //   caption: '@QuasarFramework',
  //   icon: 'list',
  //   link: 'https://facebook.quasar.dev'
  // },
  {
    title: 'Profil',
    caption: 'Community Quasar projects',
    icon: 'account_circle',
    link: 'http://localhost:8080/#/profil'
  },
  {
    title: 'Setting',
    caption: 'Community Quasar projects',
    icon: 'settings',
    link: 'http://localhost:8080/#/sitting'
  },
  {
    title: 'Sign out',
    caption: 'Community Quasar projects',
    icon: 'close',
    link: 'http://localhost:8080/#/login'
  }
]
const linksHot = [
  {
    title : 'Learn quasar',
    icon: 'whatshot',
    link: 'http://localhost:8080/#/hot'
  },
  {
    title : 'Noel',
    icon: 'whatshot',
    link: 'http://localhost:8080/#/hot'
  },
  {
    title : 'World cup 2022',
    icon: 'whatshot',
    link: 'http://localhost:8080/#/hot'
  },
  {
    title : 'Easy to get a ps5 ',
    link: 'http://localhost:8080/#/hot'
  },
  {
    title : 'Fire work in Paris',
    link: 'http://localhost:8080/#/hot'
  },
  {
    title : 'Get a stage easy',
    link: 'http://localhost:8080/#/hot'
  },
  {
    title : 'New Iphone 100 ',
    link: 'http://localhost:8080/#/hot'
  },
  {
    title : 'Climat change',
    link: 'http://localhost:8080/#/hot'
  },

]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink,
    HotLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      file: ref(null),
      label: ref('Quick post'),
      essentialLinks: linksList,
      hotLinks: linksHot,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>

<style>
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


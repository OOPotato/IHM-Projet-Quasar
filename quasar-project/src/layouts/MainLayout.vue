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
          Trending Now
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
    title: 'Notifications',
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
    title: 'Paramètres',
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
    title : 'Learn Quasar',
    icon: 'whatshot',
    link: 'http://localhost:8080/#/hot'
  },
  {
    title : 'Christmas',
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
    title : 'Fireworks in Paris',
    link: 'http://localhost:8080/#/hot'
  },
  {
    title : 'Get an internship easily',
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

</style>


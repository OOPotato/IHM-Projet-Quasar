<template>
  <q-layout view="lhh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Accueil
        </q-toolbar-title>
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
        <p style="text-align: center;color: blue; cursor: pointer;"> Voir plus</p>
      </q-list>
    </q-drawer>

    <q-page-container>
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
    link: 'https://quasar.dev'
  },
  {
    title: 'Explorer',
    caption: 'github.com/quasarframework',
    icon: 'explore',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Notification',
    caption: 'chat.quasar.dev',
    icon: 'circle_notifications',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Messages',
    caption: 'forum.quasar.dev',
    icon: 'chat',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Signets',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Listes',
    caption: '@QuasarFramework',
    icon: 'list',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Profil',
    caption: 'Community Quasar projects',
    icon: 'account_circle',
    link: 'https://awesome.quasar.dev'
  },
  {
    title: 'Setting',
    caption: 'Community Quasar projects',
    icon: 'settings',
    link: 'https://awesome.quasar.dev'
  }
]
const linksHot = [
  {
    title : 'Learn quasar',
    icon: 'whatshot',
  },
  {
    title : 'Noel',
    icon: 'whatshot',
  },
  {
    title : 'World cup 2022',
    icon: 'whatshot',
  },
  {
    title : 'Easy to get a ps5 '
  },
  {
    title : 'Fire work in Paris'
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


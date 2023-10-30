<template>
  <div id="app" class="flex container h-screen w-full">
    <!-- side navigation -->
    <SideNav />

    <!-- tweets -->
    <TweetsView />

    <!-- default right bar -->
    <DefaultRightBar />

  </div>
</template>

<script>
import SideNav from '../components/SideNav';
import TweetsView from "../components/TweetsView";
import DefaultRightBar from '../components/DefaultRightBar';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'HomeView',
  components: {
    SideNav,
    TweetsView,
    DefaultRightBar
  },
  computed: {
    ...mapGetters('twitter', ['profile'])
  },
  methods: {
    ...mapActions('authentication', ['loginUserIfAlreadyAuthenticated'])
  },
  async created() {
    await this.loginUserIfAlreadyAuthenticated();
  }
}
</script>

<style>
/* div {
  border: 1px dashed blue;
  padding: 15px;
}

div.items-center.justify-center {
  background-color: rgba(240, 240, 240, 0.5);
} */
</style>
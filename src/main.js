import Vue from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import Amplify from 'aws-amplify'
import '@aws-amplify/ui-vue'
import router from './router'
import store from './store'

Amplify.configure({
  Auth: {
    region: 'eu-west-1',
    userPoolId: 'eu-west-1_HPTxEJaFh',
    userPoolWebClientId: '2n86c01m2bf72grl2b5gsqt2u1',
    mandatorySignIn: true
  }
})


const appConfig = {
  'aws_appsync_graphqlEndpoint': 'https://b47neuwodzfljkjaursz6sedue.appsync-api.eu-west-1.amazonaws.com/graphql',
  'aws_appsync_region': 'eu-west-1',
  'aws_appsync_authenticationType': 'AMAZON_COGNITO_USER_POOLS',
}
Amplify.configure(appConfig)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

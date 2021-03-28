import { Meteor } from 'meteor/meteor'
import Vue from 'vue';

import VueMeteorTracker from 'vue-meteor-tracker'
import '../imports/ui/plugins'

import App from '../imports/ui/App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import router from '../routers/studentRoutes.js'
import './menubar'
Meteor.startup(() => {
  new Vue({
    router,
    el: '#app',
    ...App,
  })
})

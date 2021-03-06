import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'semantic-ui-icon/icon.css'
import 'semantic-ui-card/card.css'
import 'semantic-ui-input/input.css'
import 'semantic-ui-image/image.css'
import 'semantic-ui-button/button.css'
import 'semantic-ui-dropdown/dropdown.css'
import 'semantic-ui-dimmer/dimmer.css'
import 'semantic-ui-modal/modal.css'
import 'semantic-ui-form/form.css'
import 'semantic-ui-segment/segment.css'
import 'semantic-ui-checkbox/checkbox.css'
import 'reset-css'
import VueCarousel from 'vue-carousel';

// var firebase = require("firebase/app");
// import firebase from 'firebase'
// import firebase from '@firebase/app';


import VModal from 'vue-js-modal'
Vue.use(VModal, { componentName: "modal", dynamic: true, injectModalsContainer: true })
Vue.config.productionTip = false


new Vue({
    router,
    store,
    VueCarousel,
    render: h => h(App)
}).$mount('#app')
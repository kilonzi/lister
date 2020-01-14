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
import * as firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyD9MqE5fo3x0iqnW5a2_Nyw3UvzIGFyezg",
    authDomain: "product-manage.firebaseapp.com",
    databaseURL: "https://product-manage.firebaseio.com",
    projectId: "product-manage",
    storageBucket: "product-manage.appspot.com",
    messagingSenderId: "1089124060845",
    appId: "1:1089124060845:web:fe69313dfb44ba45a88024",
    measurementId: "G-BECB5L91Y4"
};
firebase.initializeApp(firebaseConfig);
firebase.auth().useDeviceLanguage();

import VModal from 'vue-js-modal'
Vue.use(VModal, { componentName: "modal", dynamic: true, injectModalsContainer: true })
Vue.config.productionTip = false


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
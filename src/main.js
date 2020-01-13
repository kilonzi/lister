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
import 'reset-css'
import VModal from 'vue-js-modal'
// import { domain, clientId } from "../auth_config.json";
// import { Auth0Plugin } from "./auth";

// Vue.use(Auth0Plugin, {
//     domain,
//     clientId,
//     onRedirectCallback: appState => {
//         router.push(
//             appState && appState.targetUrl ?
//             appState.targetUrl :
//             window.location.pathname
//         );
//     }
// });
Vue.use(VModal, { componentName: "modal", dynamic: true, injectModalsContainer: true })
Vue.config.productionTip = false


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
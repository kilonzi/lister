/* eslint-disable no-undef */
export let facebookSDK = {
    data() {
        return {
            FB: {}
        }
    },
    mounted() {
        let _this = this
        this.$nextTick(() => {
            window.fbAsyncInit = function() {
                FB.init({
                    appId: 'XXX',
                    xfbml: true,
                    version: 'v2.6'
                })
                FB.AppEvents.logPageView()
                _this.FB = FB
                    // eslint-disable-next-line 
                console.log('FB SDK was initialized as mixin')
            };
            (function(d, s, id) {
                let js, fjs = d.getElementsByTagName(s)[0]
                if (d.getElementById(id)) { return }
                js = d.createElement(s);
                js.id = id
                js.src = '//connect.facebook.net/en_US/sdk.js'
                fjs.parentNode.insertBefore(js, fjs)
            }(document, 'script', 'facebook-jssdk'))
        })
    }

}
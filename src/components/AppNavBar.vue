<template>
  <nav>
    <div class="brand">
      <h3>LISTER</h3>
    </div>
    <div class="userDetails">
      <img class="ui avatar image" :src="photoUrl" alt="User Profile Picture" />
      <div class="ui compact menu">
        <div class="ui simple pointing compact dropdown item">
          {{name}}
          <i class="bars icon"></i>
          <div class="menu">
            <div class="item">
              <i class="facebook icon"></i>
              Link Facebook
              </div>
            <div class="item">
               <i class="twitter icon"></i>
              Link Twitter
              </div>
            <div class="item">
               <i class="instagram icon"></i>
              Link Instagram
              </div>
            <div class="item" @click="logOutCurrentUser">
              <i class="red icon power off"></i>
              Sign Out
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import firebase from "firebase";
import router from "../router";
export default {
  name: "navBar",
  components: {

  },
  data(){
    return{
      scale: "scale",
      name:'',
      photoUrl:''
    }
  },
  mounted() {
    var user = firebase.auth().currentUser;
    if (user != null) {
      this.name = user.displayName;
      this.photoUrl = user.photoURL;
    }else{
      router.push('/signin')
    }
  },
  methods: {
    collapseSidebar() {
      document.getElementById("sideBar").classList.toggle("display");
    },
    logOutCurrentUser() {
      firebase
        .auth()
        .signOut()
        .then(function() {
          router.push("/signin");
        })
        .catch(function(error) {
          // An error happened.
          alert(error);
        });
    }
  }
};
</script>

<style  scoped>
h3 {
  max-width: 600px;
  font-size: 2rem;
  font-weight: bolder;
  padding: 0.5rem;
}
nav {
  display: flex !important;
  position: relative;
  align-items: center;
  padding: 2.5rem 0.5rem !important;
  background-color: white;
  margin: 0 0 0.5rem 0 !important;
  justify-content: space-between;
  border-bottom: 1px solid #3a5998;
  border-radius: 0.5rem;
}
.brand {
  display: flex;
  align-items: center;
  position: relative;
  right: 0px;
}
.userDetails {
  position: relative;
  left: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.scale{
  transform: scale(0.25)
}
</style>
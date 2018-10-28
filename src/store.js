import Vue from "vue";
import Vuex from "vuex";
import * as firebase from "firebase";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      id: null,
      name: null
    },
    alert: "",
    userData: [],
    tiles: [],
    toEdit: {
      reference: "",
      atPos: ""
    },
    add_edit: false
    //    edit by default
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    tiles_mutation(state, tileData) {
      state.tiles.push(tileData);
    },
    userData_mutation(state, payload) {
      state.userData = payload;
    },
    toEdit_mutation(state, payload) {
      state.toEdit.reference = payload.reference;
      state.toEdit.atPos = payload.atPos;
    }
  },
  actions: {
    signUpUser({ commit }, payload) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then(user => {
          const createUser = {
            id: user.uid,
            name: payload.email
          };
          commit("setUser", createUser);
        })
        .catch(err => (this.state.alert = err));
    },
    logInUser({ commit }, payload) {
      firebase
        .auth()
        .signInWithEmailAndPassword(payload.email, payload.password)
        .then(user => {
          const createUser = {
            id: user.uid,
            name: payload.email
          };
          commit("setUser", createUser);
        })
        .catch(err => (this.state.alert = err));
    },
    socialSignIn({ commit }, index) {
      let provider;
      if (index === 0) {
        provider = new firebase.auth.GoogleAuthProvider();
      } else if (index === 1) {
        provider = new firebase.auth.FacebookAuthProvider();
      }
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
          let user = firebase.auth().currentUser;
          const createUser = {
            id: result.user.uid,
            name: ""
          };
          if (user != null) {
            user.providerData.forEach(function(profile) {
              createUser.name = profile.displayName;
            });
          }
          commit("setUser", createUser);
        })
        .catch(err => (this.state.alert = err));
    },
    tiles_action({ commit }, tileData) {
      commit("tiles_mutation", tileData);
    },
    userData_action({ commit }, payload) {
      commit("userData_mutation", payload);
    },
    toEdit_action({ commit }, payload) {
      let newpayload = {
        reference: payload.reference,
        atPos: payload.atPos
      };
      commit("toEdit_mutation", newpayload);
    },
  },
  getters: {
    user(state) {
      return state.user;
    },
    alert(state) {
      return state.alert;
    },
    userData_getters(state) {
      return state.userData;
    },
    tiles_getters(state) {
      return state.tiles;
    }
  }
});

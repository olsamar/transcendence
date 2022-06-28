import router from "@/router";
import axios from "axios";
import { createStore } from "vuex";

const storeUser = createStore({
  state: {
    isAuthenticated: false,
    user: {
      id: 0,
      username: "",
      avatar: "",
      twoFactorEnabled: false,
    },
    roomsInfo: [],
  },
  getters: {
    isAuthenticated(state) {
      return state.isAuthenticated;
    },
  },
  mutations: {
    updateId(state, id) {
      state.user.id = id;
    },
    updateUserName(state, name) {
      state.user.username = name;
    },
    updateUserAvatar(state, avatar) {
      state.user.avatar = avatar;
    },
    updateTwoFactor(state, update) {
      state.user.twoFactorEnabled = update;
    },
    setAuthenticated(state) {
      state.isAuthenticated = true;
    },
    unsetAuthenticated(state) {
      state.isAuthenticated = false;
    },
    updateRoomsList(state, updatedRoomsList) {
      state.roomsInfo = updatedRoomsList;
    },
  },
  actions: {
    async login({ commit }) {
      if (storeUser.getters.isAuthenticated === false) {
        await axios
          .get("http://localhost:3000/auth/status", {
            withCredentials: true,
          })
          .then(async (response) => {
            // console.log("before 2F");
            // await axios
            //   .get("http://localhost:8080/2fAuthenticate", {
            //     withCredentials: true,
            //   })
            //   // await axios.get("http://localhost:8080/2fAuthenticate")
            //   .then(() => {
            //     console.log("after 2F");
            commit("setAuthenticated");
            commit("updateId", response.data.id);
            commit("updateUserAvatar", response.data.avatar);
            commit("updateTwoFactor", response.data.isTwoFactorAuthEnabled);
            commit("updateUserName", response.data.username);
          })
          // ;
          // }
          // )
          .catch(() => {
            console.log("user is not unauthorized");
          });
      }
    },
    //action to enable 2f when the value was updated from disable to enable
    //otherwise just call the commit("updateTwoFactor", response.data.isTwoFactorAuthEnabled) if from enable to disable
    async enable2F({ commit }) {
      await axios
        .get("http://localhost:3000/two-factor-auth/generate")
        .then(() => {
          //TODO do I really need response here? onlything I am doing is to update the two factor enable to true in the DB
          commit("updateTwoFactor", true);
        })
        .catch(() => {
          console.log("error on commit the two factor enable");
        });
    },
    logout({ commit }) {
      commit("unsetAuthenticated");
    },
  },
});

export default storeUser;

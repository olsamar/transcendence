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
    },
    activeRoomName: "general",
  },
  getters: {
    getActiveRoomName(state) {
      return state.activeRoomName;
    },
  },
  mutations: {
    updateUserInfo(state, update) {
      state.user.username = update.username;
      state.user.avatar = update.avatar;
    },
    login(state) {
      if (state.isAuthenticated === false) {
        axios
          .get("http://localhost:3000/auth/status", {
            withCredentials: true,
          })
          .then((response) => {
            state.isAuthenticated = true;
            state.user.id = response.data.id;
            if (!response.data.username) {
              router.push({ name: "Register" });
            } else {
              state.user.username = response.data.username;
              state.user.avatar = response.data.avatar;
            }
          })
          .catch(() => {
            router.push({ name: "Home" });
          });
      }
    },
    logout(state) {
      state.isAuthenticated = false;
    },
    updateActiveRoomName(state, newName) {
      state.activeRoomName = newName;
      console.log("state.activeRoomName", state.activeRoomName);
    },
  },
});

export default storeUser;

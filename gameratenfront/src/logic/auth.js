import axios from "axios";
import Cookies from "js-cookie";

const ENDPOINT_PATH = "";

export default {
    setUserLogged(userLogged, userId) {
        localStorage.setItem("userLogged", userLogged);
        localStorage.setItem("userId", userId)
    },

    setUserType(userType) {
        localStorage.setItem('userType', userType)
    },
    getUserType(userType) {
        return localStorage.getItem('userType')
    },
    getUserLogged() {
        return localStorage.getItem("userLogged")
    },
    getUserId() {
        return localStorage.getItem("userId")
    },
    deleteUserLogged() {
        localStorage.removeItem("userLogged")
        localStorage.removeItem("userId")
    },
    register(email, password) {
        const user = {email, password};
        return axios.post(ENDPOINT_PATH + "register", user);
    },
    login(email, password) {
        const user = { email, password };
        return axios.post(`http://127.0.0.1:8000/api/auth/login/`, user);
    },
    isAuthenticated() {
        const user = localStorage.getItem('userLogged');
        return user ? true : false
    }
};
import axios from 'axios';
import Vue from 'vue'
import Vuex from 'vuex'
import games from './module-games';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    games: [{
      id:1,
      title: "Uncharted",
      genre: "aventura",
      online: 0,
      image: "uncharted.png"
    },
    {
      id: 2,
      title: "Mortal Kombat",
      genre: "lucha",
      online: 0,
      image: "MortalKombat.png"
    }],
    scores: []
  },
  getters: {
    games: state => {
      return state.games;
    }
  },
  mutations: {
    SET_GAMES (state, games) {
      state.games = games
    },
    SET_SCORES (state, scores) {
      state.scores = scores
    },
    FIND_SCORE_BY_ID(state, id) {
      const scoreObj = state.scores.find(({game_id}) => game_id === id);
      return scoreObj.score;
    },
    GET_TITLES(state) {
      return state.games.map(({title}) => title)
    },
    FIND_GAME_BY_ID(state, _id) {
      return state.games.find(({id}) => id === _id)
    }
  },
  actions: {
    loadGames ({commit}) {
      axios.get("http://127.0.0.1:8000/api/games")
      .then(response => response.data)
      .then(games => {
        commit('SET_GAMES', games)
      })
    },
    loadScores ({commit}) {
      axios.get("http://127.0.0.1:8000/api/scores")
      .then(response => response.data)
      .then(scores => {
        console.log(scores);
        commit('SET_SCORES', scores)
      })
    },
    getTitles({commit}) {
      commit('GET_TITLES');
    },
    findGameById({commit}, id) {
      commit("FIND_GAME_BY_ID", id)
    }
    },
  modules: {
  }
})

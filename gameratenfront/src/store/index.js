import axios from 'axios';
import Vue from 'vue'
import Vuex from 'vuex'
import games from './module-games';
import {shuffle} from '../utils/knuth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    games: [],
    recommendations: [],
    scores: []
  },
  getters: {
    games: state => {
      return state.games;
    },
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
    },
    GET_MVG_GAMES(state) {
      state.games.sort((a,b) => a.s)
    },
    GET_GAMES_BY_GENRE(state, _genre) {
      const games = state.games.filter(({genre}) => genre === _genre)
      const recommendations = state.recommendations = shuffle(games)
      return recommendations
    }
  },
  actions: {
    loadGames ({commit}) {
      axios.get(`http://127.0.0.1:8000/api/games/`)
      .then(response => response.data)
      .then(games => {
        commit('SET_GAMES', games)
      })
    },
    loadScores ({commit}) {
      axios.get(`http://127.0.0.1:8000/api/scores/`)
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
    },
    getRecommendations({commit}, genre) {
      commit("GET_GAMES_BY_GENRE", genre)
    }
    },
  modules: {
  }
})

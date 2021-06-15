import axios from 'axios';
import Vue from 'vue'
import Vuex from 'vuex'
import {shuffle} from '../utils/knuth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    games: [],
    scores: [],
    user: ""
  },
  getters: {
    games: state => {
      return state.games;
    },
    gameById: (state) => (_id) => {
      return state.games.find(({id}) => id === _id)
    },
    getIdByTitle: (state) => (_title) => {
      const game = state.games.find(({title}) => title == _title)
      return game.id
    },
    getTitles: (state) => state.games.map(({title}) => title),
    getRecommendations: (state) => (_genre, _title) => {
      const games = state.games.filter(({title, genre}) => genre === _genre && title !== _title)
      const recommendations  = shuffle(games)
      return recommendations.slice(0,6)
    },
    sortGamesByCreated: (state) => {
      const gamesSorted = state.games.sort((a,b) => (a.created_at < b.created_at) ? 1 : ((b.created_at < a.created_at) ? -1 : 0))
      console.log(gamesSorted)
      return gamesSorted.slice(0, 6)
    },
    sortGamesAlphabet: (state) => {
      const gamesSorted = state.games.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0))
      return gamesSorted

    },

    user: (state) => state.user
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
    FIND_GAME_BY_ID(state, _id) {
      return state.games.find(({id}) => id === _id)
    },
    GET_MVG_GAMES(state) {
      state.games.sort((a,b) => a.s)
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
        commit('SET_SCORES', scores)
      })
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

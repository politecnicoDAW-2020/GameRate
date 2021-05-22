import axios from "axios";

const SET_GAME_LIST = "SET_GAME_LIST";
const CREATE_GAME = "CREATE_GAME";
const UPDATE_GAME = "UPDATE_GAME";

const initialState = {
    gameList: []
};

const mutations = {
    [SET_GAME_LIST](state, gameList) {
        state.gameList = gameList;
    },
    [CREATE_GAME](state, game) {
        state.gameList.push(game)
    },
    [UPDATE_GAME](state, updatedGame) {
        let gameToUpdate = gameList.find(({id}) => id === updatedGame.id);
        gameToUpdate = updatedGame;
    }
}

const actions = {
    async setGameList({commit}) {
        axios.get(`${API_URL}/api/games/`)
        .then(response => commit('SET_GAME_LIST', response.data))
    }
}

const getters = {
    gameList: state => state.gameList,
    gameById: state => id => state.gameList.find(g => g.id === id),
    gameByTitle: state => title => state.gameList.find(g => g.title === title)
}

export default {
    state: initialState,
    getters,
    mutations,
    actions
}
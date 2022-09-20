/* eslint-disable no-param-reassign */

import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';

import modules from '@/json-data/modules.json';

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
    storage: window.localStorage,
});

// eslint-disable-next-line
export const store = new Vuex.Store({
    modules: {},
    state: {
        modules,
        count: 0,
        completedTaskIds: [],
    },
    getters: {
        completedTaskIds(state) {
            return state.completedTaskIds;
        },
        completedChapters() {
            // return all chapters where all tasks are present in completedTaskIds
        },
    },
    actions: {
        incrementCount(context) {
            context.commit('setCount', context.state.count + 1);
        },
        incrementCountBy(context, payload) {
            context.commit('setCount', context.state.count + payload);
        },
        addToCompletedTaskIds(context, payload) {
            if (context.state.completedTaskIds.includes(payload)) {
                return;
            }
            context.commit('addToCompletedTaskIds', payload);
        },
        removeFromCompletedTaskIds(context, payload) {
            if (!context.state.completedTaskIds.includes(payload)) {
                return;
            }
            context.commit('removeFromCompletedTaskIds', payload);
        },
    },
    mutations: {
        setCount(state, payload) {
            state.count = payload;
        },
        addToCompletedTaskIds(state, payload) {
            state.completedTaskIds.push(payload);
        },
        removeFromCompletedTaskIds(state, payload) {
            state.completedTaskIds = state.completedTaskIds.filter((item) => item !== payload);
        },
    },
    plugins: [vuexLocal.plugin],
});

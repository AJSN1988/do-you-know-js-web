const setTheme = ({ commit }, payload) => {
  commit('themeMutation', payload);
};

const setLocale = ({ commit }, payload) => {
  commit('localeMutation', payload);
};

export { setTheme, setLocale };

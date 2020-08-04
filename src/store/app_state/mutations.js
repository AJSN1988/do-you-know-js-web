const themeMutation = (state, payload) => {
  state.theme = payload;
};

const localeMutation = (state, payload) => {
  state.locale = payload;
};

export {
  themeMutation,
  localeMutation,
};

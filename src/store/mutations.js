export const SET_POSTS_DATA = (state, payload) => {
  state.redditPosts = payload;
};

export const SET_SORT = (state, payload) => {
  state.sort = payload;
};

export const SET_LOADING = (state, payload) => {
  state.isLoading = payload;
};

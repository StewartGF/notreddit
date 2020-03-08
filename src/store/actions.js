export const getPosts = async ({ commit }, payload) => {
  commit("SET_LOADING", true);
  let response = await fetch(
    `https://www.reddit.com/r/${payload.subreddit}/${payload.sort}/.json?limit=100`
  );
  let data = await response.json();
  console.log(data.data.children);
  commit("SET_POSTS_DATA", data.data.children);
  commit("SET_LOADING", false);
};

export const setSort = ({ commit }, payload) => {
  commit("SET_SORT", payload.sort);
};

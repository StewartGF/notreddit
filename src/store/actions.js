// export const getSubreddit = ({ commit }) => {};
export const getPosts = async ({ commit }, payload) => {
  let response = await fetch(
    `https://www.reddit.com/r/${payload.subreddit}/${payload.sort}/.json`
  );
  let data = await response.json();
  console.log(data.data.children);
  commit("SET_POSTS_DATA", data.data.children);
};

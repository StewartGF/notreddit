// export const getSubreddit = ({ commit }) => {};
export const getPosts = async ({ commit }) => {
  let response = await fetch("https://www.reddit.com/r/showerthoughts.json");
  let data = await response.json();
  console.log(
    "%c--------  data",
    "background: #41B883; color: white; font-size:14px"
  );
  data.data.children.shift();
  data.data.children.shift();
  console.log(data.data.children);
  commit("SET_POSTS_DATA", data.data.children);
};

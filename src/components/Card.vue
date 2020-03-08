<template>
  <div class="card">
    <div class="card-title">
      <a :href="post.url" target="_blank">
        <span class="go-to" data-tool-tip="Ir al post"></span>
      </a>
      <span class="pinned-text" v-if="post.stickied">
        <span class="tack"></span>
        pinned post
      </span>
      <span>
        posted by u/{{ post.author }}
        <span class="time-ago">{{timeSince(post.created_utc)}}</span>
      </span>
      <h1>{{ post.title }}</h1>
    </div>
    <div class="card-body">
      <span class="bloque1comments">
        <span class="comments">Comments:</span>
        <span class="numeros">{{ post.num_comments.toLocaleString() }}</span>
      </span>
      <span class="bloque2ups">
        <span class="upvotes">Upvotes:</span>
        <span class="numeros">{{ post.ups.toLocaleString() }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["post"],
  methods: {
    timeSince(utcDate) {
      /**
       * esta funcion es de SkySanders en StackOverflow
       * URL : https://stackoverflow.com/questions/3177836/how-to-format-time-since-xxx-e-g-4-minutes-ago-similar-to-stack-exchange-site
       * la modifiqué para que dijera "just now" para los menores a 1 minuto
       * y aceptara UTC data (que es lo que entrega la API de reddit)
       */
      let date = new Date(utcDate * 1000);
      let seconds = Math.floor((new Date() - date) / 1000);
      let interval = Math.floor(seconds / 31536000);

      if (interval >= 1) {
        return interval + " years ago";
      }
      interval = Math.floor(seconds / 2592000);
      if (interval >= 1) {
        return interval + " months ago";
      }
      interval = Math.floor(seconds / 86400);
      if (interval >= 1) {
        return interval + " days ago";
      }
      interval = Math.floor(seconds / 3600);
      if (interval >= 1) {
        return interval + " hours ago";
      }
      interval = Math.floor(seconds / 60);
      if (interval >= 1) {
        return interval + " minutes ago";
      }
      return " just now";
    }
  }
};
</script>

<style lang="css" scoped>
.dark .time-ago {
  color: #e69fa9;
}
.time-ago {
  color: #dc3e04;
}
.go-to {
  background: url("../assets/goto.png") no-repeat;
  display: inline-block;
  height: 30px;
  width: 50px;
  transform: scale(0.6);
  position: absolute;
  top: 0px;
  right: -20px;
}

.dark .go-to {
  filter: invert(100%);
}
.numeros {
  font-weight: 700;
  margin-left: 2px;
}
.light .upvotes,
.light .comments {
  font-weight: 700;
  font-size: 1.1rem;
  color: #dc3e04;
  margin-left: 3px;
}
.dark .upvotes,
.dark .comments {
  font-weight: 700;
  font-size: 1.1rem;
  color: #e69fa9;
}
.pinned-text {
  font-style: italic;
  margin-left: 50px;
  display: table-cell;
}
.tack {
  background: url("../assets/tack.png") no-repeat;
  display: inline-block;
  height: 16px;
  width: 20px;
}
.card {
  width: 60%;
  background-color: white;
  display: inline-block;
  padding: 15px 15px 15px 15px;
  box-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, 0.2), 0 0 1rem rgba(0, 0, 0, 0.2);
  border: 1px solid #f1f1f1;
  margin: 0.3% 1% 0.5% 1%;
  transition: background 0.25s ease-in-out;
  border-radius: 6px;
  position: relative;
}
.dark .card {
  color: white;
  border: 1px solid #11111a;
  background-color: #3c3a57;
}
.dark .card-body {
  color: white;
}
.card-title {
  white-space: pre-line;
  text-align: start;
  overflow: hidden;
  word-wrap: break-word;
}

.card-title h1 {
  font-size: 1.4rem;
}

.card-body {
  font-size: 1rem;
  color: rgb(70, 70, 70);
  white-space: pre-line;
  width: 90%;
  text-align: center;
  overflow: hidden;
  margin-top: 20px;
}

@media (max-width: 1000px) {
  .card-title h1 {
    font-size: 1.1rem;
  }
}
@media (max-width: 450px) {
  .bloque1comments {
    float: left;
  }
  .bloque2ups {
    float: left;
  }
}

@media (max-width: 550px) {
  .pinned-text {
    display: table-cell;
  }
}
</style>

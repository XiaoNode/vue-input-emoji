<template>
  <div id="app">
    <section class="page-header">
      <h1 class="project-name">Vue Input Emoji 可输入表情框</h1>
      <p>
        Vue.js 2.0 component
      </p>
      <a
        class="btn"
        href="https://github.com/XiaoNode/vue-input-emoji"
        target="_blank"
        >GitHub</a
      ><a
        class="btn"
        href="https://www.npmjs.com/package/vue-input-emoji"
        target="_blank"
        >NPM</a
      >
    </section>

    <section class="main-content">
      <h3>Install</h3>
      <p><code>npm install vue-input-emoji --save</code></p>
      <!-- <p><code>yarn add vue-input-emoji</code></p> -->

      <div class="playground">
        <div>
          <span></span>
          <h3>Preview</h3>
          default:
          <InputEmoji v-model="defaultValue" :emojiData="emojiData" />
          <br>

          You can also use custom slots:
          <InputEmoji v-model="defaultValue2" :emojiData="emojiData" ids="id1">
            <span class="iconfont" style="color:red;">emoji</span>
          </InputEmoji>

          <h3>Case Emoji</h3>
          <code>
            {{ emojiData }}
          </code>
        </div>

        <footer class="site-footer">
          <span class="site-footer-credits">
            <a href="https://github.com/XiaoNode" target="_blank">blog</a>
          </span>
        </footer>
      </div>
    </section>
  </div>
</template>

<script>
import InputEmoji from "./components/InputEmoji.vue";

export default {
  name: "app",

  components: {
    InputEmoji,
  },

  data() {
    return {
      defaultValue: "some text",
      defaultValue2: "some text",
      emojiData: require("./assets/emoji.json"),
    };
  },

  methods: {},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto");
@import "styles/normalize.css";
@import "styles/github-light.css";
@import "styles/stylesheet.css";
</style>

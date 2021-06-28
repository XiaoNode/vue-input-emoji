<template>
  <div class="emojibox">
    <a-input
      :value="product"
      class="chatText"
      type="text"
      :id="ids"
      @input="onInput"
    ></a-input>
    <div class="chatIcon">
      <a-popover
        placement="top"
        trigger="click"
        class="emoBox"
        overlayClassName="popoverbox"
      >
        <div slot="content" class="emotionList">
          <a
            href="javascript:void(0);"
            @click="getEmo(index)"
            v-for="(item, index) in faceList"
            :key="index"
            class="emotionItem"
            >{{ item }}</a
          >
        </div>
        <slot><a-icon type="smile"/></slot>
      </a-popover>
    </div>
  </div>
</template>

<script>
export default {
  model: {
    prop: "product",
    event: "input",
  },
  props: {
    product: {
      type: String,
      default: "",
    },
    ids: {
      type: String,
      default: "inputid",
    },
    emojiData: {
      type: Array,
      default: [],
    },
  },
  mounted() {
    for (let i in this.$props.emojiData) {
      this.$data.faceList.push(this.$props.emojiData[i].char);
    }
  },
  data() {
    return {
      visible: false,
      faceList: [],
      textarea: "",
    };
  },
  methods: {
    getEmo(index) {
      var textArea = document.getElementById(this.$props.ids);
      function changeSelectedText(obj, str) {
        if (window.getSelection) {
          textArea.setRangeText(str);
          textArea.selectionStart += str.length;
          textArea.focus();
        }
      }
      changeSelectedText(textArea, this.faceList[index]);

      this.$emit("input", textArea.value);
      return;
    },
    onInput(event) {
      this.$emit("input", event.target.value);
    },
  },
};
</script>
<style>
.popoverbox {
  width: 500px;
}
</style>

<style scoped>
.emojibox {
  display: flex;
  position: relative;
}
.ant-popover {
  height: 100px;
  width: 400px;
  overflow: scroll;
  overflow-x: auto;
}
/* left content */
.chatText {
  display: inline-block;
  margin-right: 50px;
}
/* right content */
.chatIcon {
  padding: 0 10px;
  display: inline-block;
  position: absolute;
  top: 0px;
  right: 0;
  width: 50px;
}
.emotionList {
  display: flex;
  flex-wrap: wrap;
  padding: 5px;
}
.emotionItem {
  width: 10%;
  font-size: 20px;
  text-align: center;
}
.emotionItem {
  text-decoration: none;
}
.emotionItem:link {
  text-decoration: none;
}
.emotionItem:visited {
  text-decoration: none;
}
.emotionItem:hover {
  text-decoration: none;
}
.emotionItem:active {
  text-decoration: none;
}
.iconbiaoqing {
  font-size: 20px;
}
</style>

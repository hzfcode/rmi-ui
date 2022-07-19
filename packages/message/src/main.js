import Message from "./message.vue"
import Vue from 'vue';

const BsMessage = function (options) {
  let defaults = {
    type: 'info',
    message: '一般的文字信息，默认左对齐，可以带图标。',
    duration: 3000
  };

  const Component = Vue.extend(Message);

  for (let key in options) {
    defaults[key] = options[key];
  }

  const { type, message, duration } = defaults;

  const vm = new Component({
    el: document.createElement('div'),
    data: function () {
      return {
        type,
        message,
        duration,
        show: true
      };
    }
  });

  document.body.appendChild(vm.$el);
};
// BsMessage.close=function(){}
export default BsMessage;
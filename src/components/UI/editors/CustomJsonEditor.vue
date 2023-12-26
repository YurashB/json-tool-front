<template>
  <div class="backdrop w-full">
    <div class="line-numbers">
      <span></span>
    </div>
    <div class="textarea-container">
      <div class="highlights absolute ">
        <!-- cloned text with <mark> tags here -->
      </div>
    </div>
    <textarea
        v-bind:value="value"
        v-on:input="$emit('input', $event.target.value)"
        @keydown="addTab($event)"
        placeholder="Type json here"
        class="resize-none border-transparent focus:border-transparent focus:ring-0"

    >
  </textarea>
  </div>
</template>

<script>
export default {
  props: {
    value: "",
    TAB_SIZE: 4,
  },
  watch: {
    json() {
      var text = this.json;
      var highlightedText = this.applyHighlights(text);
      var highlights = document.querySelector(".highlights")
      const lineNumbers = document.querySelector('.line-numbers')
      const textarea = document.querySelector('textarea')
      highlights.innerHTML = highlightedText
      textarea.addEventListener('keyup', event => {
        const numberOfLines = event.target.value.split('\n').length

        lineNumbers.innerHTML = Array(numberOfLines)
            .fill(`<span></span>`)
            .join('')
      })
    }
  },
  methods: {
    applyHighlights(text) {
      return text
          .replace(/\n$/g, '\n\n')
          .replace(/"([^"]*)"/g, '<span class="green">$&</span>')
          .replace(/true,|false,/g, '<span class="orange">$&</span>')
          .replace(/null,/g, '<span class="blue">$&</span>')
          .replace(/\[|\]/g, '<span class="purple">$&</span>')
    },
    addTab(event) {
      let target = event.target;
      let value = target.value;
      let start = target.selectionStart;
      let end = target.selectionEnd;

      if (event.key === 'Tab' && !event.metaKey) {
        event.preventDefault();
        value = value.substring(0, start) + ' '.repeat(this.TAB_SIZE) + value.substring(end);
        event.target.value = value;

        setTimeout(() => target.selectionStart = target.selectionEnd = start + this.TAB_SIZE, 0);
      } else if (event.key === 'Enter') {
        let current_line = value.substr(0, start).split("\n").pop();

        if (current_line && current_line.startsWith(' '.repeat(this.TAB_SIZE))) {
          event.preventDefault();
          let spaces_count = current_line.search(/\S|$/);
          let tabs_count = spaces_count ? spaces_count / this.TAB_SIZE : 0;

          value = value.substring(0, start) + '\n' + ' '.repeat(this.TAB_SIZE).repeat(tabs_count) + this.json.substring(end);
          event.target.value = value;
          setTimeout(() => target.selectionStart = target.selectionEnd = start + this.TAB_SIZE * tabs_count + 1, 0);
        }
      }
    },

  },
}
</script>

<style>

</style>
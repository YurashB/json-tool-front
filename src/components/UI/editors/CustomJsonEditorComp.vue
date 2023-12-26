<template>
  <div>
    <h2 class="text-3xl mb-2">{{ title }}</h2>
    <div class="mb-4 border border-gray-200 rounded-t-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
      <div class="flex items-center justify-between px-3 py-2 border-b dark:border-gray-600">
        <div
            class="flex flex-wrap items-center divide-gray-200 sm:divide-x sm:rtl:divide-x-reverse dark:divide-gray-600">
          <div class="flex items-center space-x-1 rtl:space-x-reverse sm:pe-4">
            <json-validation-button
                :json="json"
                @validate="validate"

            />
            <json-to-flat-view
                @convert="convertToFlat"
                :json="json"
                :disabled="!isValid"
            />
            <save-button
                v-model:data="json"
                v-bind:disabled="isSaveButtonDisabled"
            />
          </div>
        </div>
      </div>
      <div class="bg-white w-full">
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
              v-model="json"
              @keydown="addTab($event)"
              placeholder="Type json here"
              class="resize-none border-transparent focus:border-transparent focus:ring-0">
            </textarea>
        </div>
      </div>
      <div :class="isValid ? ' bg-green-600' : ' bg-red-600'" v-if="validationMessage">
        <p class="text-white">&nbsp{{ validationMessage }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import TextComponent from "@/components/UI/textareas/TextComponent.vue";
import JsonEditorComp from "@/components/UI/editors/JsonEditorComp.vue";
import JsonToFlatView from "@/components/UI/buttons/JsonToFlatView.vue";
import SaveButton from "@/components/UI/buttons/SaveButton.vue";
import JsonValidationButton from "@/components/UI/buttons/JsonValidationButton.vue";
import axios from "axios";

export default {
  components: {JsonValidationButton, SaveButton, JsonToFlatView, JsonEditorComp, TextComponent},
  data() {
    return {
      json: "",
      TAB_SIZE: 4,
      isValid: false,
      validationMessage: "",
      isAuth: false,
      isSaveButtonDisabled: true,
      convertedData: "",
    }
  },
  props: {
    title: ""
  },
  methods: {
    validate(response) {
      this.isValid = response.isValid;
      this.validationMessage = response.validationMessage;
    },
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
    convertToFlat(flattenJson) {
      this.convertedData = flattenJson
      this.$emit('convert', flattenJson)
    }
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
    },
    isValid() {
      try{
        this.isSaveButtonDisabled = !this.isAuth && false
      } catch (e) {
        this.isSaveButtonDisabled = !this.isAuth && true
      }
    }
  },
  mounted() {
    axios.get("/auth/user").then(res => {
      this.isAuth = res.status === 200;
    })
  },
}
</script>

<style>
.highlights {
  white-space: pre-wrap;
  word-wrap: break-word;
  padding-left: 12px;
}

.green {
  color: green;
}

.orange {
  color: orange;
}

.blue {
  color: blue;
}

.purple {
  color: rebeccapurple;
}

textarea {
  display: block;
  background-color: transparent;
  color: transparent;
  caret-color: black;
  line-height: 21px;
  height: 400px;
  width: 100%;
  overflow-y: hidden;
  padding: 0;
}

.border-transparent {
  border-left: solid rgba(85, 110, 148, 0.1);
}

.border-transparent:focus {
  border-left: solid rgba(85, 110, 148, 0.1);
}


.backdrop {
  display: inline-flex;
  gap: 10px;
  line-height: 21px;
  border-radius: 2px;
  padding: 20px 10px;
}

.line-numbers {
  width: 20px;
  text-align: right;
}

.line-numbers span {
  counter-increment: linenumber;
}

.line-numbers span::before {
  content: counter(linenumber);
  display: block;
  color: #506882;
}
</style>
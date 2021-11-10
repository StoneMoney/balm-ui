import { ref } from 'vue';

const demos = ref([]);

function initSnippet(name, count) {
  demos.value = []; // reset

  if (name !== 'utils' && count) {
    demos.value = [''];

    for (let i = 1; i <= count; i++) {
      // NOTE: Critical dependency: the request of a dependency is an expression
      // 1. 完全使用变量 require(variable)
      // let code = require(`@/snippets/${name}/demo${i}.md`).default;

      // 2. 部分使用变量 require(prefix + variable + suffix)
      let filename = `${name}/demo${i}`;
      let code = require(`@/snippets/${filename}.md`).default; // NOTE: just one variable in `require`

      demos.value.push(code);
    }
  }
}

const useSnippetStore = () => {
  return {
    demos,
    initSnippet
  };
};

export default useSnippetStore;

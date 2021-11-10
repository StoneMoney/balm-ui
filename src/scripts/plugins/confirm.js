import createVueApp from '../config/ssr';
import MdcDialog from '../components/dialog/mdc-dialog.vue';
import { getOptions, createModal, removeModel } from '../utils/modal';

// Define confirm dialog constants
const UI_CONFIRM_DIALOG = {
  id: 'balmui-confirm-dialog'
};

const DEFAULT_OPTIONS = {
  className: '',
  title: '',
  state: '', // success, info, warning, error, help
  stateOutlined: false,
  message: '',
  raw: false,
  acceptText: 'OK',
  cancelText: 'Cancel',
  callback: false
};

let globalOptions = DEFAULT_OPTIONS;
let confirmEl;
let confirmApp;

const template = `<mdc-dialog class="mdc-confirm-dialog" :open="open" :options="options">
  <button type="button"
    class="mdc-button mdc-button--raised mdc-confirm-dialog__primary-button"
    data-mdc-dialog-button-default
    @click="handleConfirm(true)">
    <span class="mdc-button__label">{{ options.acceptText }}</span>
  </button>
  <button type="button"
    class="mdc-button mdc-button--outlined mdc-confirm-dialog__secondary-button"
    @click="handleConfirm(false)">
    <span class="mdc-button__label">{{ options.cancelText }}</span>
  </button>
</mdc-dialog>`;

function createConfirmDialog(options, callback) {
  confirmEl = createModal(UI_CONFIRM_DIALOG.id);

  confirmApp = createVueApp({
    name: 'ConfirmDialog',
    components: {
      MdcDialog
    },
    data() {
      return {
        open: false,
        options
      };
    },
    mounted() {
      this.$nextTick(() => {
        this.open = true;
      });
    },
    unmounted() {
      removeModel(confirmEl);
    },
    methods: {
      handleClose() {
        this.open = false;

        confirmApp.unmount(`#${UI_CONFIRM_DIALOG.id}`);
      },
      handleConfirm(result) {
        this.handleClose();

        if (typeof this.options.callback === 'function') {
          this.options.callback(result);
        } else {
          callback(result);
        }
      }
    },
    template
  });

  return confirmApp;
}

function confirmDialog(customOptions = {}) {
  const options = getOptions(globalOptions, customOptions);

  return new Promise((resolve) => {
    createConfirmDialog(options, resolve).mount(`#${UI_CONFIRM_DIALOG.id}`);
  });
}

function install(app, options = {}) {
  globalOptions = Object.assign({}, DEFAULT_OPTIONS, options);

  app.config.globalProperties.$confirm = confirmDialog;
  app.provide('confirm', confirmDialog);
}

const $confirm = {
  install
};

const useConfirm = () => confirmDialog;

export default $confirm;
export { install, useConfirm };

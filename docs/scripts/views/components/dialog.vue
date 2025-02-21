<template>
  <docs-page
    name="dialog"
    demo-count="2"
    :apis="[
      'ui-dialog',
      'dialog',
      'dialog-title',
      'dialog-content',
      'dialog-actions'
    ]"
  >
    <template #hero>
      <div class="hero-demo">
        <ui-dialog
          v-if="typeOption === 0"
          no-scrim
          :stacked="!!buttonOption"
          class="hero-dialog mdc-dialog--open"
        >
          <ui-dialog-title
            v-if="hasTitle"
            :class="$theme.getTextClass('primary', $store.theme)"
          >
            Dialog header
          </ui-dialog-title>
          <ui-dialog-content
            :class="$theme.getTextClass('secondary', $store.theme)"
          >
            <p>Dialog body text</p>
          </ui-dialog-content>
          <ui-dialog-actions>
            <ui-button>Action1</ui-button>
            <ui-button>Action2</ui-button>
          </ui-dialog-actions>
        </ui-dialog>
        <ui-dialog
          v-if="typeOption === 1"
          no-scrim
          class="hero-dialog mdc-dialog--open"
        >
          <ui-dialog-title
            :class="$theme.getTextClass('primary', $store.theme)"
          >
            Dialog header
          </ui-dialog-title>
          <ui-dialog-content>
            <ui-list
              v-model="heroSelectedIndex"
              avatar
              single-selection
              :class="$theme.getTextClass('secondary', $store.theme)"
            >
              <ui-item v-for="i in 3" :key="i">
                <ui-item-first-content
                  :class="$theme.getTextClass('secondary', $store.theme)"
                >
                  <ui-icon size="48">account_circle</ui-icon>
                </ui-item-first-content>
                <ui-item-text-content>Item {{ i }}</ui-item-text-content>
              </ui-item>
            </ui-list>
          </ui-dialog-content>
        </ui-dialog>
        <ui-dialog
          v-if="typeOption === 2"
          no-scrim
          scrollable
          :stacked="!!buttonOption"
          class="demo-confirmation-dialog hero-dialog mdc-dialog--open"
        >
          <ui-dialog-title
            :class="$theme.getTextClass('primary', $store.theme)"
          >
            Dialog header
          </ui-dialog-title>
          <ui-dialog-content>
            <ui-form>
              <ui-form-field v-for="i in 4" :key="i">
                <ui-radio :input-id="`hero-radio${i}`" :value="i"></ui-radio>
                <label
                  :for="`hero-radio${i}`"
                  :class="$theme.getTextClass('secondary', $store.theme)"
                >
                  Item {{ i }}
                </label>
              </ui-form-field>
            </ui-form>
          </ui-dialog-content>
          <ui-dialog-actions>
            <ui-button>Action1</ui-button>
            <ui-button>Action2</ui-button>
          </ui-dialog-actions>
        </ui-dialog>
      </div>
      <div class="hero-options">
        <ui-select
          v-model="typeOption"
          class="hero-option"
          :options="TypeOptions"
        >
          Type
        </ui-select>
        <div class="hero-option">
          <ui-form-field v-if="typeOption === 0">
            <ui-checkbox
              id="hero-checkbox-title"
              v-model="hasTitle"
              value="1"
            ></ui-checkbox>
            <label for="hero-checkbox-title">Title</label>
          </ui-form-field>
          <span v-if="typeOption === 1">
            Selected Index: {{ heroSelectedIndex }}
          </span>
          <template v-else>
            <ui-form-field v-for="item in ButtonOptions" :key="item.value">
              <ui-radio
                v-model="buttonOption"
                :input-id="`hero-button${item.value}`"
                :value="item.value"
              ></ui-radio>
              <label :for="`hero-button${item.value}`">{{ item.label }}</label>
            </ui-form-field>
          </template>
        </div>
      </div>
    </template>

    <!-- Content -->
    <section class="demo-wrapper">
      <div class="demo">
        <ui-button raised @click="$balmUI.onOpen('open')">
          Show Dialog
        </ui-button>
      </div>
      <ui-snippet :code="$store.demos[1]"></ui-snippet>
    </section>

    <section class="demo-wrapper">
      <div class="demo">
        <ui-button raised @click="$balmUI.onShow('open2')">
          Show Scrolling Dialog
        </ui-button>
      </div>
      <ui-snippet :code="$store.demos[2]"></ui-snippet>
    </section>

    <ui-dialog v-model="open" @confirm="onConfirm">
      <ui-dialog-title>Use Google's location service?</ui-dialog-title>
      <ui-dialog-content>
        <p>
          Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.
        </p>
      </ui-dialog-content>
      <ui-dialog-actions></ui-dialog-actions>
    </ui-dialog>

    <ui-dialog v-model="open2" scrollable @confirm="onConfirm">
      <ui-dialog-title>Choose a Ringtone</ui-dialog-title>
      <ui-dialog-content>
        <ui-list>
          <ui-item v-for="(item, index) in list" :key="index">
            {{ item }}
          </ui-item>
        </ui-list>
      </ui-dialog-content>
      <ui-dialog-actions></ui-dialog-actions>
    </ui-dialog>
  </docs-page>
</template>

<script>
const TypeOptions = [
  {
    label: 'Alert',
    value: 0
  },
  {
    label: 'Simple',
    value: 1
  },
  {
    label: 'Confirmation',
    value: 2
  }
];

const ButtonOptions = [
  {
    label: 'Side by side',
    value: 0
  },
  {
    label: 'Stacked',
    value: 1
  }
];

export default {
  metaInfo: {
    titleTemplate: '%s - Dialog'
  },
  data() {
    return {
      // hero
      TypeOptions,
      ButtonOptions,
      typeOption: 0,
      hasTitle: true,
      buttonOption: 0,
      heroSelectedIndex: -1,
      // demo
      open: false,
      open2: false,
      list: [
        'None',
        'Callisto',
        'Ganymede',
        'Luna',
        'Marimba',
        'Schwifty',
        'Callisto',
        'Ganymede',
        'Luna',
        'Marimba',
        'Schwifty'
      ]
    };
  },
  methods: {
    onConfirm(result) {
      if (result) {
        console.log('ok');
      } else {
        console.log('cancel');
      }
    }
  }
};
</script>

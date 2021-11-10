```html
<ui-drawer><!-- the drawer child components --></ui-drawer>
```

**`<ui-drawer>` Types**

- `0`: `'permanent'`
- `1`: `'dismissible'`
- `2`: `'modal'`

NOTE:

- `<ui-drawer>` (`type="permanent"`) has not props and events.
- `<ui-drawer type="dismissible">` and `<ui-drawer type="modal">` must be including a `<ui-nav>`. And the first `<ui-nav-item>` needs to apply activated state in the drawer.

### Props

| Name                     | Type           | Default | Description                                                                                                       |
| ------------------------ | -------------- | ------- | ----------------------------------------------------------------------------------------------------------------- |
| `type`                   | string, number | `0`     | Mandatory. Button types.                                                                                          |
| `navId`                  | string         | `null`  | The external menu button selector. (Please refer to the `navId` prop of the [top app bar](/#/layout/top-app-bar)) |
| `modelValue` (`v-model`) | boolean        | `false` | The drawer toggle state.                                                                                          |
| `viewportHeight`         | boolean        | `false` | Viewport full height(`100vh`) .                                                                                   |

### Slots

| Name      | Props | Description                                         |
| --------- | ----- | --------------------------------------------------- |
| `default` |       | The default slot holds the drawer child components. |

**Child components:**

- `<ui-drawer-header>`
- `<ui-drawer-content>`

### Events

| Name  | Type                      | Description                                |
| ----- | ------------------------- | ------------------------------------------ |
| `nav` | `function(open: boolean)` | Emits when the drawer is opened or closed. |

> NOTE: If you are not using `v-model`, you should listen for the drawer using `@nav` and update the `modelValue` prop.

- Automatic

  ```html
  <ui-drawer v-model="open" type="modal"></ui-drawer>
  ```

- Manual

  ```html
  <ui-drawer
    :model-value="open"
    type="modal"
    @nav="balmUI.onChange('open', $event)"
  ></ui-drawer>
  ```

- `$alert(message)`
- `$alert(options)`

  ```ts
  interface VueInstance {
    $alert(options: string | object): Promise<void>;
  }
  ```

### Options

| Option          | Type     | Default | Description                                         |
| --------------- | -------- | ------- | --------------------------------------------------- |
| `className`     | string   | `''`    | The custom class name for the alert dialog.         |
| `title`         | string   | `''`    | The title of the alert dialog.                      |
| `state`         | string   | `''`    | State type.                                         |
| `stateOutlined` | boolean  | `false` | Show outlined state.                                |
| `message`       | string   | `''`    | The content to be displayed in the alert dialog.    |
| `raw`           | boolean  | `false` | Rendered plain HTML.                                |
| `buttonText`    | string   | `'OK'`  | Alert button content.                               |
| `callback`      | function | `false` | Handle some event when the alert button is clicked. |

```ts
interface AlertDialog {
  state: 'success' | 'info' | 'warning' | 'error' | 'help';
}
```

### Events

- Usage 1

  ```js
  $alert({
    message,
    callback() {
      // ...
    }
  });
  ```

- Usage 2 (Recommended)

  ```js
  $alert(message).then(() => {
    // ...
  });
  ```

### Use `$alert` without `.vue` component

```js
import { useAlert } from 'balm-ui';
// OR
// import { useAlert } from 'balm-ui/plugins/alert';

const $alert = useAlert();
$alert('Hello BalmUI');
```

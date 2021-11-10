```scss
@use 'balm-ui/dist/balm-ui';
```

```js
import BalmUI from 'balm-ui';
import BalmUINext from 'balm-ui/dist/balm-ui-next';

// `app`: Vue app
app.use(BalmUI);
app.use(BalmUINext, {
  // Optional. Overwrite `<ui-bottom-navigation>` props with default value.
  UiBottomNavigation: {
    // some props
  }
});
```

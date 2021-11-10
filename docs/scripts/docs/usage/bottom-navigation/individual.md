```scss
@use 'balm-ui/components/core';
@use 'balm-ui/components/bottom-navigation/bottom-navigation';
@use 'balm-ui/components/tabs/tabs';
@use 'balm-ui/components/icon/icon'; // Optional
```

```js
import UiBottomNavigation from 'balm-ui/components/bottom-navigation';
import UiTabsComponents from 'balm-ui/components/tabs';

// `app`: Vue app
// Optional. Overwrite `<ui-bottom-navigation>` props with default value.
app.use(UiBottomNavigation, {
  // some props
});
app.use(UiTabsComponents);
```

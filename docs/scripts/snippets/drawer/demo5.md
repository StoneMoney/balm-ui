```html
<div class="demo-container">
  <!-- Drawer -->
  <ui-drawer type="modal" nav-id="demo-menu">
    <ui-drawer-header>
      <ui-drawer-title>Title</ui-drawer-title>
      <ui-drawer-subtitle>Subtitle</ui-drawer-subtitle>
    </ui-drawer-header>
    <ui-drawer-content>
      <ui-nav>
        <ui-nav-item href="javascript:void(0)" active>Item {{ 0 }}</ui-nav-item>
        <ui-nav-item v-for="i in 12" :key="i" href="javascript:void(0)">
          Item {{ i }}
        </ui-nav-item>
      </ui-nav>
    </ui-drawer-content>
  </ui-drawer>
  <!-- Content -->
  <div class="demo-content">
    <!-- App bar -->
    <ui-top-app-bar
      fixed
      class="demo-app-bar"
      content-selector=".demo-app-content"
      nav-id="demo-menu"
    >
      Title
    </ui-top-app-bar>
    <!-- App content -->
    <div class="demo-app-content">
      <p v-for="i in 24" :key="i">Main Content {{ i }}</p>
    </div>
  </div>
</div>
```

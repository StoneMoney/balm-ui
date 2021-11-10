const Drawer = () => import('@/views/drawer/index');
const PermanentDrawerAboveToolbar = () =>
  import('@/views/drawer/permanent-drawer-above-toolbar');
const PermanentDrawerBelowToolbar = () =>
  import('@/views/drawer/permanent-drawer-below-toolbar');
const DismissibleDrawerFullHeightDrawer = () =>
  import('@/views/drawer/dismissible-drawer-full-height-drawer');
const DismissibleDrawerBelowTopAppBar = () =>
  import('@/views/drawer/dismissible-drawer-below-top-app-bar');
const ModalDrawer = () => import('@/views/drawer/modal-drawer');
const Tabs = () => import('@/views/components/tabs');
const Menu = () => import('@/views/components/menu');
const Pagination = () => import('@/views/components/pagination');
const BottomNavigation = () => import('@/views/components/bottom-navigation');

export default [
  {
    path: '',
    redirect: () => {
      return { name: 'navigation.drawer' };
    }
  },
  {
    path: 'drawer',
    name: 'navigation.drawer',
    component: Drawer
  },
  {
    path: 'permanent-drawer-above-toolbar',
    name: 'navigation.permanent-drawer-above-toolbar',
    component: PermanentDrawerAboveToolbar,
    meta: { noLayout: true }
  },
  {
    path: 'permanent-drawer-below-toolbar',
    name: 'navigation.permanent-drawer-below-toolbar',
    component: PermanentDrawerBelowToolbar,
    meta: { noLayout: true }
  },
  {
    path: 'dismissible-drawer-full-height-drawer',
    name: 'navigation.dismissible-drawer-full-height-drawer',
    component: DismissibleDrawerFullHeightDrawer,
    meta: { noLayout: true }
  },
  {
    path: 'dismissible-drawer-below-top-app-bar',
    name: 'navigation.dismissible-drawer-below-top-app-bar',
    component: DismissibleDrawerBelowTopAppBar,
    meta: { noLayout: true }
  },
  {
    path: 'modal-drawer',
    name: 'navigation.modal-drawer',
    component: ModalDrawer,
    meta: { noLayout: true }
  },
  {
    path: 'tabs',
    name: 'navigation.tabs',
    component: Tabs
  },
  {
    path: 'menu',
    name: 'navigation.menu',
    component: Menu
  },
  {
    path: 'pagination',
    name: 'navigation.pagination',
    component: Pagination
  },
  {
    path: 'bottom-navigation',
    name: 'navigation.bottom-navigation',
    component: BottomNavigation,
    meta: { noLayout: true }
  }
];

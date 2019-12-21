import CategoryPage from './CategoryPage.vue';
import CategoryList from './CategoryList.vue';
import RelatedByCategory from './RelatedByCategory.vue';
import BreadCrumbs from './BreadCrumbs.vue';
import SiteMapPage from './SiteMapPage.vue';

export default ({ Vue }) => {
  // eslint-disable-next-line vue/match-component-file-name
  Vue.component('CategoryPage', CategoryPage);
  Vue.component('category-list', CategoryList);
  Vue.component('related-by-category', RelatedByCategory);
  Vue.component('bread-crumbs', BreadCrumbs);
  Vue.component('site-map-page', SiteMapPage);
}
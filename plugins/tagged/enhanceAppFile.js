import AllTags from './AllTags.vue';
import TagPage from './TagPage.vue';
import TagList from './TagList.vue'; 

export default ({ Vue }) => {
  Vue.component('all-tags', AllTags);
  Vue.component('tag-page', TagPage);
  Vue.component('tag-list', TagList);
}
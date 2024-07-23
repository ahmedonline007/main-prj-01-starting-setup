import { defineAsyncComponent } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

// import CoachDetail from './pages/coaches/CoachDetail.vue';
import CoachesList from './pages/coaches/CoachesList.vue';
import CoachRegistration from './pages/coaches/CoachRegistration.vue';
import ContactCoach from './pages/requests/ContactCoach.vue';
import RequestsReceived from './pages/requests/RequestsReceived.vue';
import NotFound from './pages/NotFound.vue';
import UserAuth from './pages/auth/UserAuth.vue';

//defineAsyncComponent دى من اجل عدم تحميل كل الصفحات فى تحميل التطبيق مرة واحدة انما عند الطلب فقط
const CoachDetail = defineAsyncComponent(() => {
  import('./pages/coaches/CoachDetail.vue');
});

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachesList },
    {
      path: '/coaches/:id',
      component: CoachDetail,
      props: true,
      children: [
        { path: 'contact', component: ContactCoach }, // /coaches/c1/contact
      ],
    },
    {
      path: '/register',
      component: CoachRegistration,
      meta: { requiresAuth: true },
    },
    {
      path: '/requests',
      component: RequestsReceived,
      meta: { requiresAuth: true },
    },
    { path: '/auth', component: UserAuth, meta: { requiresUnAuth: true } },
    { path: '/:notFound(.*)', component: NotFound },
  ],
});

//دى تستخدم فى حالة ان المستخدم كتب العنوان فى المتصفح ومن الممكن ليس له صلاحية الدخول
router.beforeEach(function (to, from, next) {
  //&& !store.getters.isAuthentication   this is when you need to get data from store just import index of collection parent store
  if (to.meta.requiresAuth) {
    next('/auth');
  } else if (to.meta.requiresUnAuth) {
    next('/coaches');
  } else {
    next();
  }
});

export default router;

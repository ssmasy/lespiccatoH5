import VueRouter from "vue-router";

import index from "../components/index";
import about from "../components/about";
import courses from "../components/courses";
import contact from "../components/contact";

const routes = [
  { path: "/", component: index },
  { path: "/about", component: about },
  { path: "/courses", component: courses },
  { path: "/contact", component: contact }
];

const router = new VueRouter({
  mode: "history",
  routes // (缩写) 相当于 routes: routes
});
export default () => {
  return router;
};


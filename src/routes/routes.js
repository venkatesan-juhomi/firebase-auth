import { Home } from "../components/Home";
import Profile from "../components/Profile";
const routes = [
  {
    path: 'home',
    component: Home,
    exact: true
  },
  {
    path: 'profile',
    component: Profile,
    exact: true
  }
];

export default routes;
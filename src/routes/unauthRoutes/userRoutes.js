import MalePage from "pages/LandingPage/MalePage";
import FemalePage from "pages/LandingPage/FemalePage";

const userRoutes = [
  {
    path: ":company_domain/",
    component: MalePage,
  },
  {
    path: ":company_domain/m",
    component: MalePage,
  },
  {
    path: ":company_domain/f",
    component: FemalePage,
  },
];

export default userRoutes;

import userRoutes from "./userRoutes";
const unauthAppRoutes = [userRoutes];

const unauthRoutes = unauthAppRoutes.flat();

export default unauthRoutes;

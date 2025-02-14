import sessionRoutes from "../api/routes/sessionRoutes.js";
import userRoutes from "../api/routes/userRoutes.js";

function loadRoutes(app) {
  app.use("/auth", sessionRoutes);
  app.use("/users", userRoutes);
}

export default loadRoutes;

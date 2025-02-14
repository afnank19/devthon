import sessionRoutes from "../api/routes/sessionRoutes.js";
import userRoutes from "../api/routes/userRoutes.js";
import courseRoutes  from "../api/routes/courseRoutes.js";

function loadRoutes(app) {
  app.use("/auth", sessionRoutes);
  app.use("/users", userRoutes);
  app.use("/Course", courseRoutes);

}

export default loadRoutes;

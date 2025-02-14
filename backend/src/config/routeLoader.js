import sessionRoutes from "../api/routes/sessionRoutes.js";
import courseRoutes  from "../api/routes/courseRoutes.js";

function loadRoutes(app) {

  app.use("/", sessionRoutes);
  app.use("/Course", courseRoutes);
}

export default loadRoutes;

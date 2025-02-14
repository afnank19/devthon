import sessionRoutes from "../api/routes/sessionRoutes.js";
import userRoutes from "../api/routes/userRoutes.js";
import courseRoutes  from "../api/routes/courseRoutes.js";

import enrollRoutes from "../api/routes/enrollRoutes.js";

function loadRoutes(app) {
  app.use("/auth", sessionRoutes);
  app.use("/users", userRoutes);
  app.use("/course", courseRoutes);
  app.use("/enrollments", enrollRoutes);
}

export default loadRoutes;

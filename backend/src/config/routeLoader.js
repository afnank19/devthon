import sessionRoutes from "../api/routes/sessionRoutes.js";

function loadRoutes(app) {
  app.use("/", (req, res) => {
    res.send("Server is up and alive.");
  });

  app.use("/", sessionRoutes);
}

export default loadRoutes;

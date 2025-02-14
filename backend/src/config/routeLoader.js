function loadRoutes(app) {
  app.use("/", (req, res) => {
    res.send("Server is up and alive.");
  });
}

export default loadRoutes;

import app from "./app.js";

//All server functionality to be initialized here
async function bootServer(PORT) {
  console.log("BOOTING SERVER");

  return app.listen(PORT, () => {
    console.log(`Server is up on ${PORT}`);
  });
}

const PORT = process.env.PORT || 3000;

void bootServer(PORT);

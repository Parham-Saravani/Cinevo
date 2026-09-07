import conntectToDataBase from "./configs/database.js";
import dotenv from "dotenv";
import app from "./app.js";

dotenv.config({ path: "./.env" });

(async () => {
  await conntectToDataBase();
  app.listen(process.env.PORT, () => {
    console.log("Server is Running on port :", process.env.PORT);
  });
})();

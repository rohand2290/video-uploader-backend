import express from "express";
import { addLogin, getLoginbyUUID } from "./Database";
import Login from "./Login";
import { v4 } from "uuid";
let router: express.Router = express.Router();

router
  .post("/addLogin", async (req, res) => {
    await addLogin(new Login(req.body.username, req.body.password, v4()));
    res.send("200 OK");
  })
  .get("/getLoginbyId/:uuid", async (req, res) => {
    res.send(JSON.stringify(await getLoginbyUUID(req.params.uuid)));
  });

export default router;

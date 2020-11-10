import express from "express";
import { addLogin, getLoginbyUUID } from "./Database";
import Login from "./Login";
import { v4 } from "uuid";
import multer from "multer";
import { pathToFileURL } from "url";
import path from "path";
import { addEmitHelpers } from "typescript";
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});
let router: express.Router = express.Router();
router
  .post("/addLogin", async (req, res) => {
    await addLogin(new Login(req.body.username, req.body.password, v4()));
    res.send("200 OK");
  })
  .post(
    "/upload-video",
    multer({ storage: storage }).single("video"),
    (req, res, next) => {
      res.send(req.file);
    }
  )
  .get("/getLoginbyId/:uuid", async (req, res) => {
    res.send(JSON.stringify(await getLoginbyUUID(req.params.uuid)));
  });

export default router;

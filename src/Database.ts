import MongoClient from "mongodb";
import Login from "./Login";

export async function addLogin(login: Login) {
  let db = await MongoClient.connect(process.env.MONGODB_URI);
  let dbo = db.db("video-uploader");
  await dbo.createCollection("logins");
  await dbo.collection("logins").insertOne({
    username: login.getUsername(),
    password: login.getPassword(),
    uuid: login.getUuid(),
  });
  await db.close();
}

export async function getLoginbyUUID(uuid: String) {
  let db = await MongoClient.connect(process.env.MONGODB_URI);
  let dbo = db.db("video-uploader");
  let result = await dbo.collection("logins").findOne({ uuid: uuid });
  await db.close();
  return result;
}

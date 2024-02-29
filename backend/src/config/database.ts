import admin from "firebase-admin"
import firebaseCredentials from "./credentials";

admin.initializeApp({
  credential: admin.credential.cert(firebaseCredentials)
})

const db = admin.firestore()

export default db;

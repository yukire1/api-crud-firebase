// firebase.js
const admin = require("firebase-admin");
// const serviceAccount = require("./serviceAccountKey.json");

if (!admin.apps.length) {
  // use service account key for admin SDK
  // admin.initializeApp({
  //   credential: admin.credential.cert(serviceAccount),
  // });

  // use environment variables for admin SDK
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    }),
  });
}

const db = admin.firestore();
module.exports = db;


import { Metadata } from "grpc-web";
import app from "firebase/app";
import "firebase/auth";
import "firebase/storage";

app.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOME,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASURMENT_ID,
});
export const firebaseApp = app;
export const uploadFile = (file: File, path: string) =>
  new Promise<string>((resolve, reject) => {
    const uploadTask = firebaseApp.storage().ref(path).put(file);
    uploadTask.on(
      "state_changed",
      function (snapshot) {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
      },
      function (error) {
        return reject(error); // added this line
      },
      function () {
        return resolve(path); // added this line
      }
    );
  });
export const getMetadata = async () => {
  try {
    const user = app.auth().currentUser;
    if (user) {
      const token = await user.getIdTokenResult();
      const metadata: Metadata = {
        authorization: "Bearer " + token.token,
      };
      return metadata;
    }
    throw new Error("user not found");
  } catch (error) {
    throw new Error("user not found");
  }
};

import { db } from "./firebase-config.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

async function testFirebase() {
  try {
    await addDoc(collection(db, "test"), {
      name: "橘子",
      message: "Firebase成功寫入",
      time: new Date()
    });

    console.log("Firestore寫入成功");
  } catch (error) {
    console.error("Firestore錯誤:", error);
  }
}

testFirebase();
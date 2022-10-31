const { initializeApp } = require("firebase/app")
const { getFirestore, collection, getDoc } = require("firebase/firestore/lite")
const { firebaseConfig } = require('./firebase_services/db_services')
const { getAnalytics } = require("firebase/analytics");

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const analytics = getAnalytics(app);
async function getUser(db) {
    try {
        const userCol = collection(db, 'user');
        console.log(userCol)
        const userSnapShot = await getDoc(userCol);
        const userList = userSnapShot.docs.map(doc => doc.data());
    } catch (error) {
        console.log(error)
    }
}

getUser(db)

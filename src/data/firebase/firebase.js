// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getDocs, getDoc, getFirestore, addDoc, doc, Timestamp, query, where } from "firebase/firestore/lite";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBChwUP2tN95CjmhOQAuBuTsQ3I2DIMJHc",
  authDomain: "sistemaventas-232f6.firebaseapp.com",
  projectId: "sistemaventas-232f6",
  storageBucket: "sistemaventas-232f6.appspot.com",
  messagingSenderId: "515058064058",
  appId: "1:515058064058:web:df78546ba5d1e5b4324083"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestoreDB = getFirestore(app);


//tablas
const ITEM = "items";
const LIST_BUY = "listBuy";


export  function CreateOrder(buyData) {
    const newOrder = { ...buyData, date: Timestamp.now() };
    
    const listBuyCollection = collection(firestoreDB, LIST_BUY);
    addDoc(listBuyCollection, newOrder).then( (response) => {
        console.log("Orden de compra Agregada: " + response.id);
    })

}


export async function GetAllOrders() {
    const orderCollection = collection(firestoreDB, LIST_BUY);
    const orderDocs = await getDocs(orderCollection);

    let orderArray = orderDocs.docs.map(doc => ({id: doc.id, ...doc.data()}));
    
    for (let i = 0; i < orderArray.length; i++) {
        orderArray[i].date = (orderArray[i].date).toDate();
    }

    orderArray.sort(function (a, b) {
        if (a.date < b.date) {
          return 1;
        }
        if (a.date > b.date) {
          return -1;
        }
        return 0;
      });

    return orderArray;
}


export async function GetOrderById(orderId = null) {
    const orderCollection = collection(firestoreDB, LIST_BUY);
    const orderRef = doc(orderCollection, orderId);
    const orderDoc = await getDoc(orderRef);

    let order = {id: orderDoc.id, ...orderDoc.data()};
    order.date = order.date.toDate();

    return order;
}
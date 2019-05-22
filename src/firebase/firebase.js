import * as firebase from 'firebase'

 // Your web app's Firebase configuration
 const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId:process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const database = firebase.database()
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

  export {firebase, googleAuthProvider, database as default}

//   //childremoved 

//   database.ref('expenses').on('child_removed', (snapshot)=>{
//       console.log(snapshot.key, snapshot.val())
//   })

//   //child changed
//   database.ref('expenses').on('child_changed', (snapshot)=> {
//       console.log(snapshot.key, snapshot.val())
//   })

//   //child added
//   database.ref('expenses').on('child_added', (snapshot)=> {
//     console.log(snapshot.key, snapshot.val())
// })


//   database.ref('expenses').once('value').then((snapshot)=>{
//       const expenses = []
//       snapshot.forEach((snapshotChild)=>{
//         expenses.push({
//             id:snapshotChild.key,
//             ...snapshotChild.val()
//         })
//       })

//       console.log(expenses)
//   })

//   database.ref('expenses').on('value', (snapshot)=>{
//     const expenses = []
//     snapshot.forEach((snapshotChild)=>{
//       expenses.push({
//           id:snapshotChild.key,
//           ...snapshotChild.val()
//       })
//     })

//     console.log(expenses)
//   })

//   database.ref('expenses').push({
//       description:'Oluci',
//       amount:600,
//       note:'Something important',
//       createdAt:12093487

//   })
//   database.ref('expenses').push({
//     description:'Fifa 19',
//     amount:100,
//     note:'Something important',
//     createdAt:12093487

// })
// database.ref('expenses').push({
//     description:'Car repair',
//     amount:200,
//     note:'Something important',
//     createdAt:12093487

// })


//   database.ref().on('value', (snapshot)=>{

//     const data = snapshot.val()
//     console.log(`${data.name} is working as ${data.job.title} in ${data.job.company}`)

//   })
// //   database.ref().set({
// //       name:'Nikolas Zec',
// //       stressLevel:7,
// //       job:{
// //           title:'Software developer',
// //           company:'Golux'
// //       },
// //       age:26,
// //       isSingle:true,
// //       location:{
// //           city:'Belgrade',
// //           country:'Serbia'
// //       }
// //   })

// //   database.ref().update({
// //       stressLevel:6,
// //         age:28,
// //         'job/company':'Same place'
// //   })
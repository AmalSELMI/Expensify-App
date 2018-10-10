import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCQ4eAznpfTdFQebMBkIHh08BHd_d5zqWI",
    authDomain: "expensify-f5b0d.firebaseapp.com",
    databaseURL: "https://expensify-f5b0d.firebaseio.com",
    projectId: "expensify-f5b0d",
    storageBucket: "expensify-f5b0d.appspot.com",
    messagingSenderId: "662710064900"
  };

  firebase.initializeApp(config);

const database = firebase.database();

// child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });
// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });

//     console.log(expenses);
//   });


// // setup expense
// database.ref('expenses').push({
//     description: 'rent',
//     amount: '1000',
// })

//  Subscription setup
// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// })
// database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('Error fetching data', e);
//   });

// database.ref().set({
//   name: 'Amal Selmi',
//   age: 29,
//   isSingle: false,
//   job: {
//       title: 'web developer',
//       company: 'lfb'
//   },
//   stressLevel: 5,
//   location: {
//     city: 'Paris',
//     country: 'France'
//   }
// }).then(() => {
//       console.log('Data is saved!');
//     }).catch((e) => {
//       console.log('This failed.', e);
//     });
//     ;

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'home sweet home',
//   'location/city': 'paris'
// });

// database.ref()
//   .remove()
//   .then(() => {
//     console.log('Data was removed');
//   }).catch((e) => {
//     console.log('Did not remove data', e);
//   });

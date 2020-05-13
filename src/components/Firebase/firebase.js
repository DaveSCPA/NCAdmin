import app from 'firebase/app';

const firebaseConfig = {
  apiKey: 'Not available',
  authDomain: 'nc-admin-data.firebaseapp.com',
  databaseURL: 'https://nc-admin-data.firebaseio.com',
  projectId: 'nc-admin-data',
  storageBucket: 'nc-admin-data.appspot.com',
  messagingSenderId: '247022213271',
  appId: '1:247022213271:web:61c01254e90debbdd1b1d2',
  measurementId: 'G-GLPB6V75KR',
};

class Firebase {
  constructor(props) {
    app.initializeApp(firebaseConfig);
  }
}

export default Firebase;

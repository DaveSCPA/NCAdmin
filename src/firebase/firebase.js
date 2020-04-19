import firebase from 'firebase';
import app from '../components/Firebase/firebase';

// Initialize Firebase
// const config = {
//   apiKey: 'AIzaSyCYaTKjfam_qMXDnGfcdnBxScEq89VQtLk',
//   authDomain: 'curious-sandbox-196209.firebaseapp.com',
//   databaseURL: 'https://curious-sandbox-196209.firebaseio.com',
//   projectId: 'curious-sandbox-196209',
//   storageBucket: '',
//   messagingSenderId: '1034032747860'
// };

const firebaseConfig = {
  apiKey: 'AIzaSyAJXMtdV0jcx5x2WpFvEcYoI3feStQ5Srw',
  authDomain: 'nc-admin-data.firebaseapp.com',
  databaseURL: 'https://nc-admin-data.firebaseio.com',
  projectId: 'nc-admin-data',
  storageBucket: 'nc-admin-data.appspot.com',
  messagingSenderId: '247022213271',
  appId: '1:247022213271:web:61c01254e90debbdd1b1d2',
  measurementId: 'G-GLPB6V75KR'
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
const githubAuthProvider = new firebase.auth.GithubAuthProvider();
const twitterAuthProvider = new firebase.auth.TwitterAuthProvider();

const database = firebase.database();
export {
  auth,
  database,
  googleAuthProvider,
  githubAuthProvider,
  facebookAuthProvider,
  twitterAuthProvider
};

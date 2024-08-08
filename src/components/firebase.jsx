import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import {NavLink} from 'react-router-dom'
import { getDatabase, ref, onValue, set ,runTransaction  } from 'firebase/database';
const firebaseConfig = {
  apiKey: "AIzaSyC5Sg7oRUv24SGOjTm79Z6kU0zEvGTECXQ",
  authDomain: "visitcounter-26e5a.firebaseapp.com",
  projectId: "visitcounter-26e5a",
  storageBucket: "visitcounter-26e5a.appspot.com",
  messagingSenderId: "917310475602",
  appId: "1:917310475602:web:c3559346fd368c045a3e8b",
  measurementId: "G-65H4HC809Z",
  databaseURL: "https://visitcounter-26e5a-default-rtdb.firebaseio.com/",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const VisitCounter = () => {
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    let visitCountRef = ref(db, "visitCount");

    onValue(visitCountRef, (snapshot) => {
      if (!snapshot.exists()) {
        set(visitCountRef, 0);
      } else {
        setVisitCount(snapshot.val());
      }
    });
  }, []);

  const incrementVisitCount = () => {
    let visitCountRef = ref(db, "visitCount");
    runTransaction(visitCountRef, (currentValue) => currentValue + 0.5);
  };

  useEffect(() => {
    incrementVisitCount();
  }, []);


  return (
<div className="visit-counter">
 
  <div className="fancy"  >
  <span className="top-key"></span>
  <span className="text">Visit count: {visitCount}</span>
  <span className="bottom-key-1"></span>
  <span className="bottom-key-2"></span>
</div>
</div>

  );
};

export default VisitCounter;
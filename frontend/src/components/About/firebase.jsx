import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { NavLink } from "react-router-dom";
import {
  getDatabase,
  ref,
  onValue,
  set,
  runTransaction,
  off,
} from "firebase/database";
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
    // Check if we've already counted this session
    const hasVisited = sessionStorage.getItem("hasVisited");

    if (!hasVisited) {
      // Only increment if we haven't counted this session
      runTransaction(visitCountRef, (currentValue) => {
        return (currentValue || 0) + 1;
      });
      // Mark this session as counted
      sessionStorage.setItem("hasVisited", "true");
    }

    // Listen for updates to the count
    onValue(visitCountRef, (snapshot) => {
      if (!snapshot.exists()) {
        set(visitCountRef, 0);
      } else {
        setVisitCount(snapshot.val());
      }
    });

    // Cleanup subscription on unmount
    return () => {
      // Unsubscribe from the listener
      off(visitCountRef);
    };
  }, []);

  return (
    <div className="visit-counter">
      <div className="fancy">
        <span className="top-key"></span>
        <span className="text">Total Visit: {visitCount}</span>
        <span className="bottom-key-1"></span>
        <span className="bottom-key-2"></span>
      </div>
    </div>
  );
};

export default VisitCounter;

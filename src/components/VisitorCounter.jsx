// src/components/VisitorCounter.jsx
import React, { useEffect, useState } from "react";
import { ref, runTransaction, onValue } from "firebase/database";
import { database } from "../firebase";

const VisitorCounter = () => {
  const [globalCount, setGlobalCount] = useState(0);

  useEffect(() => {
    // Reference to a node in your database, e.g., "visitorCount"
    const counterRef = ref(database, "visitorCount");

    // Increment the counter atomically on page load
    runTransaction(counterRef, (currentCount) => {
      return (currentCount || 0) + 1;
    });

    // Listen for changes in the visitor counter
    const unsubscribe = onValue(counterRef, (snapshot) => {
      const count = snapshot.val();
      setGlobalCount(count);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="container text-center my-4">
      <p>Global Visitor Count: {globalCount}</p>
    </div>
  );
};

export default VisitorCounter;
 

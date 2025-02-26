import React, { useEffect, useState } from "react";

const VisitorCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let storedCount = localStorage.getItem("visitorCount");
    storedCount = storedCount ? parseInt(storedCount) : 0;
    storedCount += 1;
    localStorage.setItem("visitorCount", storedCount);
    setCount(storedCount);
  }, []);

  return (
    <div className="container text-center my-4">
      <p>Visitor Count: {count}</p>
    </div>
  );
};

export default VisitorCounter;

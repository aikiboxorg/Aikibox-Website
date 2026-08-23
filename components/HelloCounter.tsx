"use client";

import { useEffect, useState } from "react";

export default function HelloCounter() {
  const [count, setCount] = useState(1482);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((c) => c + Math.floor(Math.random() * 3));
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return <>{count.toLocaleString()}</>;
}

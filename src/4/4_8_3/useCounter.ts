import { useState, useEffect } from 'react';

export function useCounter(delay) {
    const [count, setCount] = useState(0);
    useInterval(() => {
        setCount((c) => c + 1);
    }, delay);
    return count;
  }

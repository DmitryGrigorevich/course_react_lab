import { useState, useEffect } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    function onTick() {
      setCount(c => c + 1);
    }

		const tmpInterval = setInterval(onTick, 1000);
		return () => clearInterval(tmpInterval)

    
  }, []);

  return <h1>{count}</h1>;
}

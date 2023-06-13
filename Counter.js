//Counter.js
import React, { useState, useEffect, useMemo, useCallback } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Counter: ${count}`;
  }, [count]);

  const isEven = useMemo(() => {
    return count % 2 === 0;
  }, [count]);

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount((prevCount) => prevCount - 1);
  }, []);

  const reset = useCallback(() => {
    setCount(0);
  }, []);

  return (
    <div>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
      <div>
        Current Count: {count}
      </div>
      <div>
        Is Even: {isEven ? 'Yes' : 'No'}
      </div>
    </div>
  );
};

export default React.memo(Counter);

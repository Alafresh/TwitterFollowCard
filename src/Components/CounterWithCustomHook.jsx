import useCounter from './useCounter';

const CounterWithCustomHook = () => {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <>
      <p>Contador {count}</p>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
    </>
  );
};

export default CounterWithCustomHook;

import { useCallback, useEffect, useRef } from 'react';

type AnyFunction = (...args: never[]) => unknown;

export default function useDebounced<T extends AnyFunction>(callback: T, delay: number = 400) {
  const callbackRef = useRef(callback);
  const setTimeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  const cancel = useCallback(() => {
    clearTimeout(setTimeoutRef.current);
  }, []);

  const debounced = useCallback(
    (...args: Parameters<T>) => {
      clearTimeout(setTimeoutRef.current);
      setTimeoutRef.current = setTimeout(() => callbackRef.current(...args), delay);
    },
    [delay]
  );

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    return cancel();
  }, [cancel]);

  return {
    debounced: debounced,
    cancel: cancel,
  };
}

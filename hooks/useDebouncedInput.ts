import { useCallback, useEffect, useRef, useState } from 'react';
import useDebounced from './useDebounced';

type DebouncedInputProps = {
  urlSearchValue: string;
  callback: (value: string) => void;
  delay?: number;
};

export function useDebouncedInput({ urlSearchValue, callback, delay }: DebouncedInputProps) {
  const [text, setText] = useState(urlSearchValue);
  const lastUrlSearchValue = useRef(urlSearchValue);

  const { debounced, cancel } = useDebounced((nextText: string) => {
    lastUrlSearchValue.current = nextText;
    callback(nextText);
  }, delay);

  useEffect(() => {
    if (lastUrlSearchValue.current !== urlSearchValue) {
      setText(urlSearchValue);
      lastUrlSearchValue.current = urlSearchValue;
    }
  }, [urlSearchValue]);

  const onChange = useCallback(
    (nextText: string) => {
      setText(nextText);
      debounced(nextText);
    },
    [debounced]
  );

  const reset = useCallback(() => {
    cancel();
    setText('');
    lastUrlSearchValue.current = '';
  }, [cancel]);

  return { text, onChange, reset };
}

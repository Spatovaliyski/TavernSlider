import { useRef, useEffect, useMemo } from "@wordpress/element";

export const Debouncer = () => {
  const timeout = useRef();

  const debounce = useMemo(
    () =>
      (func, wait) => (...args) => {
        clearTimeout(timeout.current);
        timeout.current = setTimeout(() => func(...args), wait);
      },
    []
  );

  useEffect(() => {
    return () => {
      if (!timeout.current) return;
      clearTimeout(timeout.current);
    };
  }, []);

  return { debounce };
};

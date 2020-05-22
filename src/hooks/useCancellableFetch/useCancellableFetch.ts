import { useCallback, useState } from "react";

export const useCancellableFetch = () => {
  const [abortController, setAbortController] = useState<AbortController>();

  const cancellableFetch = useCallback(async (url: string) => {
    const controller = new AbortController();
    const signal = controller.signal;
    setAbortController(controller);

    return fetch(url, { signal });
  }, []);

  return [cancellableFetch, abortController] as const;
};

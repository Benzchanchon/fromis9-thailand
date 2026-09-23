import { useEffect, useState } from "react";

type RequestState<T> =
  | { status: "loading" }
  | { status: "error"; error: Error }
  | { status: "success"; data: T };

// Callers supply a stable function; cleanup cancels stale navigation/retry requests.
export function useNewsRequest<T>(load: (signal: AbortSignal) => Promise<T>) {
  const [state, setState] = useState<RequestState<T>>({ status: "loading" });
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    load(controller.signal).then(
      (data) => {
        if (!controller.signal.aborted) setState({ status: "success", data });
      },
      (error: unknown) => {
        if (!controller.signal.aborted) {
          setState({ status: "error", error: error instanceof Error ? error : new Error("News request failed") });
        }
      },
    );
    return () => controller.abort();
  }, [load, attempt]);

  function retry() {
    setState({ status: "loading" });
    setAttempt((value) => value + 1);
  }

  return { ...state, retry };
}

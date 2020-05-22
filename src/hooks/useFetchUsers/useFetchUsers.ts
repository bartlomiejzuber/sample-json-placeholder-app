import { useState, useCallback, useRef } from "react";
import { User } from "types/user";
import { useCancellableFetch } from "hooks/useCancellableFetch/useCancellableFetch";

export interface UseFetchUsersState {
  query: string;
  users: User[];
  loading: boolean;
}

const initialState: UseFetchUsersState = {
  query: "",
  users: [],
  loading: false,
};

const createUrl = (endpoint: string, data: Record<string, string>) => {
  const url = new URL(endpoint);
  url.search = new URLSearchParams(data).toString();
  return url.toString();
};

export const useFetchUsers = (endpoint: string) => {
  const [{ query, users, loading }, setState] = useState(initialState);
  const [cancellableFetch, controller] = useCancellableFetch();
  const prevValue = useRef("");

  const fetchUsers = useCallback(
    (value: string) => {
      if ((prevValue.current !== value || !value) && loading && controller) {
        controller.abort(); // cancel previous request
      }

      if (value) {
        const handleFetch = async () => {
          const url = createUrl(endpoint, {
            name_like: value,
          });
          setState({ query: value, users: [], loading: true });
          const response = await cancellableFetch(url);
          const users: User[] = await response.json();
          setState({ query: value, users, loading: false });
        };

        handleFetch();
      } else {
        setState(initialState);
      }

      prevValue.current = value;
    },
    [endpoint, loading, cancellableFetch, controller]
  );

  return [fetchUsers, users, query, loading] as const;
};

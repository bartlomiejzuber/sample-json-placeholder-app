import React from "react";
import { Box } from "@material-ui/core";

import { SearchBox, SearchResults, NoResults } from "components";
import { useFetchUsers } from "hooks";

const Search = () => {
  const [fetchUsers, users, query, loading] = useFetchUsers(
    "https://jsonplaceholder.typicode.com/users"
  );

  return (
    <Box display="flex" flexDirection="column">
      <SearchBox onChange={fetchUsers} />
      <SearchResults users={users} skeleton={loading} />
      {!loading && query && users.length === 0 && <NoResults />}
    </Box>
  );
};

export default Search;

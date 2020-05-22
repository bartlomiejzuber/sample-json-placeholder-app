import React, { Suspense, lazy } from "react";
import { Box, CircularProgress } from "@material-ui/core";

const Search = lazy(() => import("./pages/Search"));

const App = () => (
  <Box display="flex" height="100%" justifyContent="center" alignItems="baseline" paddingY={10}>
    <Suspense fallback={<CircularProgress />}>
      <Search />
    </Suspense>
  </Box>
);

export default App;

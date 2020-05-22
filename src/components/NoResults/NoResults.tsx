import React from "react";
import { Box, Typography } from "@material-ui/core";

export const NoResults: React.FC = () => (
  <Box textAlign="center">
    <Typography variant="h5">
      Sorry no results.
      <span role="img" aria-label="ghost icon">
        👻
      </span>
    </Typography>
  </Box>
);

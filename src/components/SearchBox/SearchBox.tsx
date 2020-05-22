import React, { useCallback, useRef, useState, useMemo } from "react";
import { Paper, InputBase } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { SearchButton, ClearButton, FadeInOutTransition } from "components";
import debounce from "lodash.debounce";

interface SearchBoxProps {
  onChange: (value: string) => void;
}

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0.25, 0.5),
  },
  input: {
    flex: 1,
    marginLeft: theme.spacing(1),
  },
  iconButton: {
    padding: theme.spacing(1),
  },
}));

export const SearchBox: React.FC<SearchBoxProps> = ({ onChange, ...rest }) => {
  const classes = useStyles();
  const [value, setValue] = useState("");
  const ref = useRef<HTMLInputElement>();

  const debouncedOnChange = useMemo(() => debounce(onChange, 500), [onChange]);
  const handleChange = useCallback(
    ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
      setValue(value);
      debouncedOnChange(value);
    },
    [debouncedOnChange]
  );
  const handleClear = useCallback(() => {
    setValue("");
    debouncedOnChange("");
    ref.current?.focus(); // keep focus
  }, [ref, debouncedOnChange]);

  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        inputRef={ref}
        className={classes.input}
        placeholder="Search by user name"
        aria-label="search by user name"
        onChange={handleChange}
        value={value}
        {...rest}
      />
      <FadeInOutTransition
        condition={!!value}
        firstNode={
          <SearchButton className={classes.iconButton} aria-label="search" />
        }
        secondNode={
          <ClearButton
            className={classes.iconButton}
            aria-label="clear"
            onClick={handleClear}
          />
        }
      />
    </Paper>
  );
};

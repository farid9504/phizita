import {
  Autocomplete,
  createTheme,
  TextField,
  ThemeProvider,
} from "@mui/material";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import stylisRTLPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import { FC } from "react";
import { ISelectField } from "@/interface/fieldForm";
import { textFieldStyles } from "./style";
// RTL Theme & Cache Configuration
const theme = createTheme({ direction: "rtl" });
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, stylisRTLPlugin],
});
const SalectField: FC<ISelectField> = ({
  error,
  label,
  fieldValue,
  options,
  setValue,
  helperText,
}) => {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <Autocomplete
          disablePortal
          options={options}
          onChange={(_, newValue) => setValue(newValue)}
          value={fieldValue}
          renderInput={(params) => (
            <TextField
              {...params}
              error={error}
              label={label}
              sx={textFieldStyles.root}
              helperText={helperText}
            />
          )}
        />
      </ThemeProvider>
    </CacheProvider>
  );
};
export default SalectField;

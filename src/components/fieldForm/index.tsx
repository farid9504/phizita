import React, { useMemo, FC } from "react";
import styles from "./FieldForm.module.scss";
import TextField from "@mui/material/TextField";
import { IFieldForm } from "@/interface/fieldForm";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material/styles";
import { IconButton, InputAdornment } from "@mui/material";
import { textFieldStyles } from "./select/style";
import ShowIcon from "@/icons/fielld/show.svg";
import HideIcon from "@/icons/fielld/hide.svg";
import ClearIcon from "@/icons/fielld/clear.svg";
import { useFieldForm } from "./hooks/useFieldForm";

const FieldForm: FC<IFieldForm> = ({
  error,
  label,
  fieldValue,
  helperText,
  setValue,
  type = "text",
  maxLength = 255,
  variant = "input",
  onFocus,
  disabled,
}) => {
  const {
    id,
    showPassword,
    toggleShowPassword,
    handleClear,
    errorLength,
    lengthValue,
    theme,
    cacheRtl,
  } = useFieldForm({ maxLength, setValue, fieldValue });
  const endAdornment = useMemo(() => {
    if (!fieldValue) return null;

    return (
      <InputAdornment position="end" className="gap-[10px]">
        {type === "password" && (
          <IconButton
            aria-label={showPassword ? "Hide password" : "Show password"}
            onClick={toggleShowPassword}
            onMouseDown={(e) => e.preventDefault()}
            edge="end"
          >
            {showPassword ? <HideIcon /> : <ShowIcon />}
          </IconButton>
        )}
        <IconButton
          aria-label="Clear input"
          edge="end"
          onClick={handleClear}
          sx={{ position: "absolute", top: 12, right: 12 }}
        >
          <ClearIcon fill="#000" />
        </IconButton>
      </InputAdornment>
    );
  }, [handleClear, showPassword, toggleShowPassword, type, fieldValue]);

  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <TextField
          error={errorLength || error}
          variant="outlined"
          id={id}
          label={label}
          value={fieldValue ?? ""}
          rows={variant === "textarea" ? 6 : 1}
          multiline={variant === "textarea"}
          helperText={
            <>
              <span>{helperText}</span>
              {Boolean((errorLength || error) && lengthValue) && (
                <span>
                  {lengthValue}/{maxLength}
                </span>
              )}
            </>
          }
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => onFocus?.()}
          FormHelperTextProps={{
            className: styles.helperText,
          }}
          InputProps={{ endAdornment }}
          inputProps={{ maxLength }}
          fullWidth
          type={showPassword && type === "password" ? "text" : type}
          dir="rtl"
          autoComplete={type === "password" ? "new-password" : "off"}
          sx={textFieldStyles.root}
          disabled={Boolean(disabled)}
        />
      </ThemeProvider>
    </CacheProvider>
  );
};

export default FieldForm;

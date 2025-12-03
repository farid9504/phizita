import { InputAdornment } from "@mui/material";
import SearchIcon from "@/icons/fielld/search.svg";
import ClearIcon from "@/icons/fielld/clear.svg";
export default function StartAdornment({
  haveValue,
  clear,
}: {
  haveValue: Boolean;
  clear: () => void;
}) {
  return (
    <InputAdornment
      position="start"
      sx={{ margin: "0", color: "inherit", paddingLeft: "8px" }}
    >
      {haveValue ? (
        <ClearIcon
          className="cursor-pointer md:scale-[.79]"
          onClick={clear}
          fill="currentColor"
        />
      ) : (
        <SearchIcon fill="currentColor" className="md:scale-[.79]" />
      )}
    </InputAdornment>
  );
}

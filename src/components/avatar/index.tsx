import { Avatar } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import Usetheme from "@/utils/theme";

export default function UserAvatar({
  src,
  alt,
}: {
  src?: string;
  alt?: string;
}) {
  const { isTablet } = Usetheme();
  return (
    <div>
      <Avatar
        alt={alt}
        src={src ? src : undefined}
        sx={{
          width: isTablet ? 40 : 48,
          height: isTablet ? 40 : 48,
          backgroundColor: "var(--accents-04)",
          color: "var(--accents-09)",
        }}
      >
        {!src && <PersonIcon />}
      </Avatar>
    </div>
  );
}

import { CSSProperties } from "react";
import StyledBadge from "./style";

interface CustomBadgeProps {
  style?: CSSProperties;
  children?: React.ReactNode;
  color?:
    | "default"
    | "error"
    | "info"
    | "primary"
    | "secondary"
    | "success"
    | "warning";
  badgeContent?: boolean;
}

export const CustomBadge = ({
  style,
  children,
  color,
  badgeContent,
}: CustomBadgeProps) => {

  return (
    <StyledBadge
      style={style}
      color={color}
      badgeContent={badgeContent}
    >
      {children}
    </StyledBadge>
  );
};

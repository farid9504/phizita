import Button from "../button";
import HorizontalMenu from "@/icons/fielld/horizontalMenu.svg";
import Left from "@/icons/fielld/left.svg";
import Right from "@/icons/fielld/right.svg";
import { MouseEvent } from "react";

export function ItemPagination({
  item,
  startEllipsis,
  endEllipsis,
}: {
  item: {
    selected: boolean;
    type: string;
    page: number | null;
    disabled: boolean;
    onClick: (key: MouseEvent<HTMLButtonElement>) => void;
  };
  startEllipsis: () => void;
  endEllipsis: () => void;
}) {
  return (
    <>
      {item.type === "page" && (
        <Button
          className="w-[32px] h-[32px] mx-[4px]"
          variant={item.selected ? "outline" : "ghost"}
          color={item.selected ? "accent" : "neutral"}
          disabled={item.disabled}
          onClick={(e) => item.onClick(e)}
        >
          {item.page !== null ? item.page : ""}
        </Button>
      )}

      {item.type === "start-ellipsis" && (
        <Button
          variant="ghost"
          color="neutral"
          className="mt-[8px]"
          disabled={item.disabled}
          onClick={startEllipsis}
        >
          <HorizontalMenu fill="currentColor" />
        </Button>
      )}

      {item.type === "end-ellipsis" && (
        <Button
          variant="ghost"
          color="neutral"
          className="mt-[8px]"
          disabled={item.disabled}
          onClick={endEllipsis}
        >
          <HorizontalMenu fill="currentColor" />
        </Button>
      )}

      {item.type === "previous" && (
        <Button
          className="text-[12px] w-[98px] h-[32px] ml-[16px] flex justify-center items-center"
          variant="ghost"
          color="neutral"
          disabled={item.disabled}
          onClick={(e) => item.onClick(e)}
        >
          <Left fill="currentColor" className="mr-[8px]" />
          صفحه قبل
        </Button>
      )}

      {item.type === "next" && (
        <Button
          className="text-[12px] w-[98px] h-[32px] mr-[16px] flex justify-center items-center"
          variant="ghost"
          color="neutral"
          disabled={item.disabled}
          onClick={(e) => item.onClick(e)}
        >
          صفحه بعد
          <Right fill="currentColor" className="ml-[8px]" />
        </Button>
      )}
    </>
  );
}

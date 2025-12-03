import UserFeedBack from "../userFeedBack";
import Notification from "@/icons/fielld/notification.svg";
import { CustomBadge } from "../customBadge";
import Search from "../search";
import clsx from "clsx";
import MobileNav from "./mobileNav";
import Message from "@/icons/fielld/message.svg";
import Usetheme from "@/utils/theme";
import Breadcrumbs from "./breadcrumbs";

export default function Nav({ toggleMunu }: { toggleMunu: () => void }) {
  const { isPhone } = Usetheme();
  return (
    <div className="w-full h-auto">
      <div
        className={clsx(
          "flex justify-between items-center",
          "border-[var(--neutral-03)] border-b-[1px]",
          "md:pb-[12px] h-[56px] lg:h-[80px] md:pt-1",
          "lg:pt-0 md:px-4 lg:px-2"
        )}
      >
        {isPhone && <MobileNav toggleMunu={toggleMunu} />}

        <div className="md:w-[280px]">
          <Search keyQuery="q" placeholder="عبارت موردنظر را وارد نمایید..." />
        </div>

        <div
          className={clsx(
            "hidden",
            "md:flex md:gap-6 md:items-center",
            "lg:items-end"
          )}
        >
          <div className="flex text-[var(--neutral-09)] md:gap-3 lg:gap-6">
            <CustomBadge color="error" badgeContent>
              <Notification />
            </CustomBadge>

            <CustomBadge>
              <Message />
            </CustomBadge>
          </div>
          <UserFeedBack />
        </div>
      </div>
      <Breadcrumbs />
    </div>
  );
}

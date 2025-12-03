import Logo from "@/icons/standardLogo.svg";
import styles from "./Sidebar.module.scss";
import UserAvatar from "../avatar";
import { CustomBadge } from "../customBadge";
import Notification from "@/icons/fielld/notification.svg";
import Message from "@/icons/fielld/message.svg";

export default function MobileHeader() {
  return (
    <div
      className="h-[168px] relative flex p-[16px] items-end"
      style={{
        background:
          "linear-gradient(286.98deg, #D8F0F3 0%, rgba(249, 249, 251, 0.05) 100%)",
      }}
    >
      <Logo className={styles.logo} />
      <div className="h-[80px] w-full">
        <div className="flex">
          <UserAvatar />
          <div className="flex-1 gap-1 flex flex-col pr-2">
            <p className="font-medium text-sm text-[--defaultColor]">
              عنوان مطب درمانی
            </p>
            <p className="text-[var(--neutral-11)] text-xs">4 پزشک فعال</p>
          </div>
        </div>
      </div>
      <div className="flex justify-end gap-[24px] text-[var(--neutral-09)]">
        <CustomBadge color="error" badgeContent>
          <Notification />
        </CustomBadge>
        <CustomBadge>
          <Message />
        </CustomBadge>
      </div>
    </div>
  );
}

import IconCover from "@/icons/coverLogin.svg";
import Logo from "@/icons/standardLogo.svg";
import clsx from "clsx";

export default function CoverLogin() {
  const hilightCls = "font-medium text-[var(--semantics-amber-10)]";

  return (
    <div
      className={clsx(
        "sm:h-[396px] h-[206px]",
        "xl:h-full xl:flex-col",
        "relative  bg-[radial-gradient(var(--gradient-bg))] flex items-center justify-between"
      )}
    >
      <div
        className={clsx(
          "flex sm:pt-[50px] xl:pt-[50px] sm:pr-[40px]  sm:pl-[48px] z-[1]",
          "px-[16px] py-[16px]"
        )}
      >
        <div className="mr-[16px]">
          <div className={clsx("2xl:flex gap-[8px]")}>
            <Logo fill="#fff" />
            <h1 className="text-[24px] font-medium text-[rgb(var(--defaultColor))]">
              فیزیتا
            </h1>
          </div>
          <div className="w-[calc(100%+100px)] xl:w-auto text-[12px] sm:text-[16px]">
            <p className="font-normal text-[rgba(var(--defaultColor),0.8)] mt-4 ">
              <span className="w-full block">
                دستیاری مطمئن برای
                <span className={hilightCls}> مدیریت هوشمند</span>
              </span>

              <span className="block text-center my-[4px] mr-[60px]">و</span>

              <span className="text-end w-full block">
                <span className={hilightCls}>درمان موثرتر </span>
                بیماران شما
              </span>
            </p>
          </div>
        </div>
      </div>
      <div
        className={clsx(
          "xl:relative xl:justify-end xl:w-full xl:translate-x-[-48px] xl:translate-y-[0px] xl:mt-auto xl:opacity-100",
          "sm:w-[288px] sm:h-[288px] sm:opacity-70",
          "w-[149px] h-[149px] absolute bottom-0 left-0 flex z-0 opacity-50"
        )}
      >
        <IconCover className={clsx("xl:absolute xl:left-0 xl:bottom-0")} />
      </div>
    </div>
  );
}

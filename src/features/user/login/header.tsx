import Logo from "@/icons/signatureLogo.svg";
import clsx from "clsx";
export default function HeaderForm() {
  return (
    <div className="block text-center">
      <Logo
        className={clsx("m-auto scale-[1.9] mb-[24px] xl:block", "hidden")}
      />
      <h2 className="xl:text-[24px] text-[16px] font-bold">ورود به سامانه</h2>
    </div>
  );
}

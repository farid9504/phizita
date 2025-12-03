import Menu from "@/icons/fielld/menu.svg";
export default function MobileNav({toggleMunu} : {toggleMunu : () => void}) {
  return (
    <div className="flex md:hidden gap-1.5 items-center">
      <span className="w-10 h-10 flex" onClick={toggleMunu}>
        <Menu fill="var(--defaultColor)" className="m-auto" />
      </span>
      <h2 className="text-base font-medium text-[--defaultColor]">فیزیتا</h2>
    </div>
  );
}

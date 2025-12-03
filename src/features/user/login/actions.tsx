import Button from "@/components/button";
import Error from "./error";

export default function LoginActions({ showError }: { showError: Boolean }) {
  return (
    <>
      <div className="min-h-[40px]">{showError && <Error />}</div>
      <div className="mt-[12px]">
        <Button
          className="h-[44px] xl:h-[44px] w-full"
          typeButton="submit"
          color="accent"
          variant="solid"
        >
          ورود به سامانه
        </Button>
      </div>
    </>
  );
}

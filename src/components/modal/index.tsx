import { ReactNode } from "react";
import ContentModal from "./content";

export default function Modal({
  children,
  onClose,
}: {
  children: ReactNode;
  onClose?: () => void;
}) {
  return (
    <div
      className="fixed top-0 right-0 bottom-0 left-0 z-[3] flex justify-center items-center"
      style={{ backgroundColor: "rgba(0 , 0 , 0 , .4)" }}
      onClick={() => onClose?.()}
    >
      <ContentModal>{children}</ContentModal>
    </div>
  );
}

import Modal from "@/components/modal";
import { Dispatch, SetStateAction } from "react";
import Header from "./header";
import VisitTime from "./visitTime";
import TreatmentSteps from "./treatmentSteps";
import Footer from "./footer";
import { useModal } from "./hooks/useModal";
import { IFieldDate } from "@/interface/fieldForm";

export default function ModalPatientCondition({
  formated,
  fieldValue,
  setOpen,
  setValue,
}: {
  formated: (key: IFieldDate) => string;
  fieldValue: IFieldDate;
  setOpen: Dispatch<SetStateAction<boolean>>;
  setValue: (key: IFieldDate) => void;
}) {
  const { tabs, activeTab, setActiveTab, setDate, date, onSubmit } = useModal({
    fieldValue,
    setOpen,
    setValue,
  });
  return (
    <Modal onClose={() => setOpen(false)}>
      <div className="overflow-auto w-[894px] h-[625px] flex flex-col">
        <div className="flex flex-col py-[20px] flex-1">
          <Header
            tabs={tabs}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <div className="w-full px-[20px] flex flex-col flex-1">
            {activeTab === "visitTime" && (
              <VisitTime
                setDate={setDate}
                formatedDate={formated(date)}
                value={date}
              />
            )}
            {activeTab === "treatmentSteps" && (
              <TreatmentSteps formatedDate={formated(date)} />
            )}
          </div>
        </div>
        <Footer
          cancel={() => setOpen(false)}
          submit={onSubmit}
          disabled={!date}
        />
      </div>
    </Modal>
  );
}

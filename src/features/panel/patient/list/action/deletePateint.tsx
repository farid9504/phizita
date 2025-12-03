import DeleteDialog from "@/components/dialog/delete";

export default function DeletePatient({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <DeleteDialog
      onConfirm={()=>alert('')}
      open={open}
      onClose={onClose}
      title="حذف اطلاعات بیماران"
      description="با انتخاب حذف، همه اطلاعات بیماران انتخاب‌شده پاک خواهد شد. ادامه می‌دهید؟"
    />
  );
}

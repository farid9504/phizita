export default function ResultCount({
  total,
  page,
  pageSize,
}: {
  total: number;
  page: number;
  pageSize: number;
}) {
  return (
    <p className="text-[13px] text-[var(--neutral-11)] !ml-[0px]">
      نمایش
      <span className="text-[#000] mx-[4px]">
        {(page - 1) * pageSize + 1} - {page * pageSize}
      </span>
      از {total} بیمار
    </p>
  );
}

import { Fragment } from "react";
import { Step } from "./step";
export default function Steps({
  data,
  step,
}: {
  data: string[];
  step: number;
}) {
  return (
    <div className="flex items-center w-full">
      {data.map((label, key) => (
        <Fragment key={key}>
          <Step label={label} index={key + 1} level={step} />
          {data[key + 1] && (
            <div className="flex-1">
              <hr className="border-[var(--neutral-04)]" />
            </div>
          )}
        </Fragment>
      ))}
    </div>
  );
}

export function useSteps(step: number) {
  const getStatus = (index: number) => {
    return step === index ? "active" : step > index ? "successful" : "default";
  };
  return { getStatus };
}

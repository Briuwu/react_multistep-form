import { useState } from "react";

const useFormHook = () => {
  const [page, setPage] = useState(0);

  const handleNext = () => setPage((prev) => prev + 1);

  const handleBack = () => setPage((prev) => prev - 1);

  const handleThanks = () => setPage(4);
  return {
    page,
    steps: page,
    handleNext,
    handleBack,
    isLastStep: page === 3,
    isFirstStep: page === 0,
    setPage,
    handleThanks,
  };
};
export default useFormHook;

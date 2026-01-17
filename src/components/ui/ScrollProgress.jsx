import { useScrollProgress } from "../../hooks/useScrollProgress";

const ScrollProgress = () => {
  const progress = useScrollProgress();

  return (
    <div
      className="fixed top-0 left-0 h-0.5 bg-blue-500 z-50 transition-all duration-150"
      style={{ width: `${progress}%` }}
    />
  );
};

export default ScrollProgress;

import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div className="w-8 h-8 border-4 border-opacity-20 border-[#915EFF] border-t-[#915EFF] rounded-full animate-spin" />
      <p className="text-[#F1F1F1] font-bold mt-6 text-sm md:text-base">
        {progress.toFixed(0)}%
      </p>
    </Html>
  );
};

export default CanvasLoader;

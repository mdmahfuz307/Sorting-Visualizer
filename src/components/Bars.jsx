import { useState, useEffect } from "react";

const Bars = ({ blocks, compare, sorted, swap }) => {
  const [width, setWidth] = useState(
    Math.min(20, Math.ceil(window.innerWidth / blocks.length) - 5)
  );

  const showNumbers = blocks.length <= 50 && width > 14;

  useEffect(() => {
    const handleResize = () => {
      setWidth(Math.min(20, Math.ceil(window.innerWidth / blocks.length) - 8));
    };

    window.addEventListener("resize", handleResize);
    setWidth(Math.min(20, Math.ceil(window.innerWidth / blocks.length) - 8));

    return () => window.removeEventListener("resize", handleResize);
  }, [blocks.length]);

  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-[600px] flex items-end justify-center px-6 py-8 rounded-2xl mx-4 my-6 shadow-2xl border border-purple-500/20">
      {/* Grid background effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px] rounded-2xl"></div>

      {/* Bars container */}
      <div className="relative z-10 flex items-end justify-center gap-0.5 w-full h-full">
        {blocks.map((block, i) => {
          const height = (block * 520) / blocks.length;
          let bgClass = "from-violet-400 to-purple-500";
          let shadowClass = "shadow-lg shadow-purple-500/50";

          if (compare && (i === compare[0] || i === compare[1])) {
            bgClass = "from-amber-400 to-orange-500";
            shadowClass = "shadow-lg shadow-amber-500/50";
          }
          if (swap && (i === swap[0] || i === swap[1])) {
            bgClass = "from-rose-400 to-red-600";
            shadowClass = "shadow-lg shadow-rose-500/50";
          }
          if (sorted && sorted.includes(i)) {
            bgClass = "from-emerald-400 to-green-500";
            shadowClass = "shadow-lg shadow-emerald-500/50";
          }

          return (
            <div
              key={i}
              className={`bg-gradient-to-t ${bgClass} ${shadowClass} rounded-t-lg transition-all duration-[10ms] ease-in flex items-end justify-center pb-1 text-xs font-bold text-white/90 hover:scale-105 hover:z-20`}
              style={{
                height: `${height}px`,
                width: `${width}px`,
              }}
            >
              {showNumbers && block}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Bars;

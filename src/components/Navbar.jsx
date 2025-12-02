const Navbar = ({
  handleLength,
  handleSpeed,
  handleAlgo,
  generateRandomArray,
  handleSort,
  handlePause,
  handleResume,
  sorting,
  paused,
  completed,
  len,
  speed,
  algo,
}) => {
  const algorithms = [
    {
      value: "bubbleSort",
      label: "💧 Bubble Sort",
      complexity: "O(n²)",
      description:
        "Repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.",
      bestCase: "O(n)",
      averageCase: "O(n²)",
      worstCase: "O(n²)",
      space: "O(1)",
    },
    {
      value: "selectionSort",
      label: "🎯 Selection Sort",
      complexity: "O(n²)",
      description:
        "Divides the input into a sorted and unsorted region, repeatedly selecting the smallest element from unsorted.",
      bestCase: "O(n²)",
      averageCase: "O(n²)",
      worstCase: "O(n²)",
      space: "O(1)",
    },
    {
      value: "insertionSort",
      label: "📥 Insertion Sort",
      complexity: "O(n²)",
      description:
        "Builds the final sorted array one item at a time by inserting each element into its proper position.",
      bestCase: "O(n)",
      averageCase: "O(n²)",
      worstCase: "O(n²)",
      space: "O(1)",
    },
    {
      value: "mergeSort",
      label: "🔀 Merge Sort",
      complexity: "O(n log n)",
      description:
        "Divides the array into halves, recursively sorts them, and then merges the sorted halves.",
      bestCase: "O(n log n)",
      averageCase: "O(n log n)",
      worstCase: "O(n log n)",
      space: "O(n)",
    },
    {
      value: "quickSort",
      label: "⚡ Quick Sort",
      complexity: "O(n log n)",
      description:
        "Picks a pivot element and partitions the array around it, then recursively sorts the partitions.",
      bestCase: "O(n log n)",
      averageCase: "O(n log n)",
      worstCase: "O(n²)",
      space: "O(log n)",
    },
  ];

  const currentAlgo = algorithms.find((a) => a.value === algo);

  return (
    <div className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 border-b border-purple-500/30 shadow-xl">
      <div className="max-w-7xl mx-auto px-6 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 flex-col lg:flex-row gap-4">
          <div className="flex items-center gap-4">
            <div className="relative bg-gradient-to-br from-purple-500 to-violet-600 p-4 rounded-2xl shadow-lg shadow-purple-500/50">
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 4h18M3 12h18M3 20h18"
                />
                <circle cx="7" cy="4" r="1.5" fill="currentColor" />
                <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                <circle cx="17" cy="20" r="1.5" fill="currentColor" />
              </svg>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Algorithm Visualizer
              </h1>
              <p className="text-purple-300 text-sm">
                Watch sorting algorithms in action
              </p>
            </div>
          </div>

          {/* Status Badge */}
          <div className="flex items-center gap-3">
            <div
              className={`px-4 py-2 rounded-full font-semibold text-sm flex items-center gap-2 ${
                paused
                  ? "bg-orange-500/20 text-orange-300 border border-orange-500/50"
                  : sorting
                  ? "bg-amber-500/20 text-amber-300 border border-amber-500/50"
                  : completed
                  ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/50"
                  : "bg-purple-500/20 text-purple-300 border border-purple-500/50"
              }`}
            >
              <div
                className={`w-2 h-2 rounded-full ${
                  paused
                    ? "bg-orange-400"
                    : sorting
                    ? "bg-amber-400 animate-pulse"
                    : completed
                    ? "bg-emerald-400"
                    : "bg-purple-400"
                }`}
              ></div>
              {paused
                ? "Paused"
                : sorting
                ? "Sorting..."
                : completed
                ? "Completed"
                : "Ready"}
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Algorithm Selection */}
          <div className="lg:col-span-4">
            <label className="block text-purple-300 text-sm font-semibold mb-2">
              Algorithm
            </label>
            <div className="relative">
              <select
                onChange={handleAlgo}
                disabled={sorting}
                value={algo}
                className="w-full bg-slate-800/50 backdrop-blur-sm border border-purple-500/30 text-white rounded-xl px-4 py-3 pr-10 cursor-pointer font-medium focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed appearance-none [&>option]:bg-slate-800 [&>option]:text-white [&>option]:py-3"
              >
                {algorithms.map((alg) => (
                  <option
                    key={alg.value}
                    value={alg.value}
                    className="bg-slate-800 text-white py-3"
                  >
                    {alg.label} - {alg.complexity}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Array Length */}
          <div className="lg:col-span-3">
            <label className="block text-purple-300 text-sm font-semibold mb-2">
              Array Size: <span className="text-white">{len}</span>
            </label>
            <input
              type="range"
              onChange={handleLength}
              min="5"
              max="100"
              step="1"
              disabled={sorting}
              value={len}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-purple-500 disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <div className="flex justify-between text-xs text-purple-400 mt-1">
              <span>5</span>
              <span>100</span>
            </div>
          </div>

          {/* Speed Control */}
          <div className="lg:col-span-3">
            <label className="block text-purple-300 text-sm font-semibold mb-2">
              Speed:{" "}
              <span className="text-white">{Math.ceil(400 / speed)}x</span>
            </label>
            <input
              type="range"
              onChange={handleSpeed}
              min="1"
              max="10"
              value={Math.ceil(400 / speed)}
              disabled={sorting}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-purple-500 disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <div className="flex justify-between text-xs text-purple-400 mt-1">
              <span>Slow</span>
              <span>Fast</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="lg:col-span-2 flex flex-col justify-end gap-2">
            <button
              onClick={generateRandomArray}
              disabled={sorting && !paused}
              className="w-full bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white font-bold py-3 px-4 rounded-xl shadow-lg shadow-purple-500/50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none hover:scale-105 active:scale-95"
            >
              🎲 Shuffle
            </button>
            {sorting && !paused ? (
              <button
                onClick={handlePause}
                className="w-full bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-bold py-3 px-4 rounded-xl shadow-lg shadow-orange-500/50 transition-all duration-200 hover:scale-105 active:scale-95"
              >
                ⏸️ Pause
              </button>
            ) : paused ? (
              <button
                onClick={handleResume}
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold py-3 px-4 rounded-xl shadow-lg shadow-blue-500/50 transition-all duration-200 hover:scale-105 active:scale-95"
              >
                ▶️ Resume
              </button>
            ) : (
              <button
                onClick={handleSort}
                disabled={completed}
                className="w-full bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-bold py-3 px-4 rounded-xl shadow-lg shadow-emerald-500/50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none hover:scale-105 active:scale-95"
              >
                ▶️ Sort
              </button>
            )}
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-6 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-gradient-to-t from-violet-400 to-purple-500 rounded shadow-lg shadow-purple-500/50"></div>
            <span className="text-purple-300">Unsorted</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-gradient-to-t from-amber-400 to-orange-500 rounded shadow-lg shadow-amber-500/50"></div>
            <span className="text-purple-300">Comparing</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-gradient-to-t from-rose-400 to-red-600 rounded shadow-lg shadow-rose-500/50"></div>
            <span className="text-purple-300">Swapping</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-gradient-to-t from-emerald-400 to-green-500 rounded shadow-lg shadow-emerald-500/50"></div>
            <span className="text-purple-300">Sorted</span>
          </div>
        </div>

        {/* Algorithm Info Card */}
        <div className="mt-6 bg-slate-800/40 backdrop-blur-sm border border-purple-500/20 rounded-xl p-5">
          <div className="flex items-start gap-4">
            <div className="text-4xl">{currentAlgo.label.split(" ")[0]}</div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-2">
                {currentAlgo.label}
              </h3>
              <p className="text-purple-300 text-sm mb-4">
                {currentAlgo.description}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="bg-slate-700/50 rounded-lg p-3">
                  <div className="text-xs text-purple-400 mb-1">Best Case</div>
                  <div className="text-sm font-bold text-emerald-400">
                    {currentAlgo.bestCase}
                  </div>
                </div>
                <div className="bg-slate-700/50 rounded-lg p-3">
                  <div className="text-xs text-purple-400 mb-1">
                    Average Case
                  </div>
                  <div className="text-sm font-bold text-amber-400">
                    {currentAlgo.averageCase}
                  </div>
                </div>
                <div className="bg-slate-700/50 rounded-lg p-3">
                  <div className="text-xs text-purple-400 mb-1">Worst Case</div>
                  <div className="text-sm font-bold text-rose-400">
                    {currentAlgo.worstCase}
                  </div>
                </div>
                <div className="bg-slate-700/50 rounded-lg p-3">
                  <div className="text-xs text-purple-400 mb-1">Space</div>
                  <div className="text-sm font-bold text-blue-400">
                    {currentAlgo.space}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

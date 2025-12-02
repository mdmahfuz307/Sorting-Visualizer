import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Bars from "./components/Bars";
import bubbleSort from "./algorithms/BubbleSort";
import selectionSort from "./algorithms/SelectionSort.js";
import insertionSort from "./algorithms/InsertionSort";
import mergeSort from "./algorithms/MergeSort";
import quickSort from "./algorithms/QuickSort";

function App() {
  const generateRandomArray = (len) => {
    setCompleted(false);
    setSorting(false);
    setSortedIndex([]);
    setPaused(false);

    const randomArray = Array.from(Array(len + 1).keys()).slice(1);

    for (let i = randomArray.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i - 1));
      const temp = randomArray[i];
      randomArray[i] = randomArray[randomIndex];
      randomArray[randomIndex] = temp;
    }

    setBlocks(randomArray);
  };

  const [algo, setAlgo] = useState("bubbleSort");
  const [len, setLength] = useState(30);
  const [blocks, setBlocks] = useState([]);
  const [sorting, setSorting] = useState(false);
  const [completed, setCompleted] = useState(true);
  const [speed, setSpeed] = useState(250);
  const [compare, setCompare] = useState([]);
  const [swap, setSwap] = useState([]);
  const [sortedIndex, setSortedIndex] = useState([]);
  const [paused, setPaused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sortOrder, setSortOrder] = useState([]);

  useEffect(() => {
    generateRandomArray(len);
  }, [len, algo]);

  const handleAlgo = (event) => {
    setAlgo(event.target.value);
  };

  const handleLength = (event) => {
    setLength(Number(event.target.value));
  };

  const handleSpeed = (event) => {
    setSpeed(Math.ceil(400 / Number(event.target.value)));
  };

  const handleSort = () => {
    setSorting(true);
    setPaused(false);

    const algorithms = {
      bubbleSort: bubbleSort,
      selectionSort: selectionSort,
      insertionSort: insertionSort,
      mergeSort: mergeSort,
      quickSort: quickSort,
    };

    const sortFunction = algorithms[algo];
    if (sortFunction) {
      const order = sortFunction(blocks);
      setSortOrder(order);
      setCurrentIndex(0);
      executeSorting(order, 0);
    } else {
      setSorting(false);
      setCompleted(true);
    }
  };

  const executeSorting = (order, startIndex) => {
    (function loop(i) {
      setTimeout(function () {
        if (paused) return;

        const [j, k, arr, index] = order[i];
        setCompare([j, k]);
        setSwap([]);

        if (index !== null) {
          setSortedIndex((prevState) => [...prevState, index]);
        }

        if (arr) {
          setBlocks(arr);
          if (j !== null || k != null) setSwap([j, k]);
        }

        if (++i < order.length) {
          setCurrentIndex(i);
          loop(i);
        } else {
          setSorting(false);
          setCompleted(true);
        }
      }, speed);
    })(startIndex);
  };

  const handlePause = () => {
    setPaused(true);
    setSorting(false);
  };

  const handleResume = () => {
    setPaused(false);
    setSorting(true);
    executeSorting(sortOrder, currentIndex);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 flex flex-col">
      <Navbar
        generateRandomArray={() => generateRandomArray(len)}
        handleLength={handleLength}
        handleSpeed={handleSpeed}
        handleAlgo={handleAlgo}
        handleSort={handleSort}
        handlePause={handlePause}
        handleResume={handleResume}
        sorting={sorting}
        paused={paused}
        completed={completed}
        len={len}
        speed={speed}
        algo={algo}
      />
      <Bars
        blocks={blocks}
        compare={sorting && compare}
        swap={sorting && swap}
        sorted={sortedIndex}
      />

      {/* Footer Section */}
      <footer className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 border-t border-purple-500/30 py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-6">
          {/* Scroll to Top Button */}
          <div className="flex justify-center mb-8">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="bg-slate-700/50 hover:bg-purple-600/70 backdrop-blur-sm text-white p-4 rounded-full shadow-xl shadow-purple-500/20 transition-all duration-300 hover:scale-110 border border-purple-500/30"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </button>
          </div>

          {/* Developer Name */}
          <div className="text-center mb-8">
            <p className="text-purple-300 text-sm">
              © 2025 Md Mahfuz Rahman Nirob
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/mdmahfuz307"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800/50 hover:bg-purple-600/70 backdrop-blur-sm text-purple-300 hover:text-white p-4 rounded-full border border-purple-500/30 hover:border-purple-400 transition-all duration-300 hover:scale-110 shadow-lg shadow-purple-500/20"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/mdmahfuz307/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800/50 hover:bg-purple-600/70 backdrop-blur-sm text-purple-300 hover:text-white p-4 rounded-full border border-purple-500/30 hover:border-purple-400 transition-all duration-300 hover:scale-110 shadow-lg shadow-purple-500/20"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="mailto:njnirob2019@gmail.com"
              className="bg-slate-800/50 hover:bg-purple-600/70 backdrop-blur-sm text-purple-300 hover:text-white p-4 rounded-full border border-purple-500/30 hover:border-purple-400 transition-all duration-300 hover:scale-110 shadow-lg shadow-purple-500/20"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

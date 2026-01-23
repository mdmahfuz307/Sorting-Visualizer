# 🎨 Algorithm Visualizer

A beautiful and interactive sorting algorithm visualizer built with React and Vite. Watch sorting algorithms come to life with stunning visualizations!

## ✨ Features

- 🔄 **5 Sorting Algorithms**: Bubble Sort, Selection Sort, Insertion Sort, Merge Sort, Quick Sort
- ⏸️ **Pause/Resume**: Control the visualization anytime
- 🎚️ **Adjustable Speed**: Control animation speed (1x to 10x)
- 📊 **Array Size Control**: Visualize arrays from 5 to 100 elements
- 🎯 **Algorithm Info**: See time and space complexity for each algorithm
- 🎨 **Beautiful UI**: Modern design with Tailwind CSS
- 📱 **Fully Responsive**: Works on all devices

---

## 🖼️ Screenshots

### Main Interface
Beautiful purple gradient interface with algorithm controls

### Sorting in Action
Watch algorithms sort arrays in real-time with color-coded visualizations

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v16.0.0 or higher)
- **npm** (v7.0.0 or higher) or **yarn** (v1.22.0 or higher)

Check your versions:
```bash
node --version
npm --version
```

### Installation

1. Clone the repository:
```bash
git clone https://github.com/mdmahfuz307/Sorting-Visualizer.git
cd algorithm-visualizer
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:3000
```

The application will automatically open in your default browser! 🎉

---


## 🛠️ Build for Production

Create an optimized production build:
```bash
npm run build
```

The build output will be in the `dist/` folder.

## 📦 Tech Stack

| Technology | Description |
|------------|-------------|
| **React 18** | UI library for building user interfaces |
| **Vite** | Next-generation frontend build tool |
| **Tailwind CSS** | Utility-first CSS framework |
| **JavaScript (ES6+)** | Programming language |
| **PostCSS** | Tool for transforming CSS |
| **ESLint** | Code linting and quality |

---

## 📁 Project Structure
```
algorithm-visualizer/
├── node_modules/           # Dependencies
├── public/                 # Static assets
├── src/
│   ├── algorithms/         # Sorting algorithm implementations
│   │   ├── BubbleSort.js
│   │   ├── SelectionSort.js
│   │   ├── InsertionSort.js
│   │   ├── MergeSort.js
│   │   └── QuickSort.js
│   ├── components/         # React components
│   │   ├── Navbar.jsx      # Header with controls
│   │   └── Bars.jsx        # Visualization bars
│   ├── App.css             # App-specific styles
│   ├── App.jsx             # Main app component
│   ├── index.css           # Global styles
│   └── main.jsx            # Entry point
├── .eslintrc.cjs           # ESLint configuration
├── .gitignore              # Git ignore rules
├── index.html              # HTML template
├── package.json            # Dependencies and scripts
├── postcss.config.js       # PostCSS configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── vite.config.js          # Vite configuration
├── LICENSE                 # MIT License
└── README.md               # This file
```

---


## 🎯 Algorithms Included

| Algorithm | Best Case | Average Case | Worst Case | Space |
|-----------|-----------|--------------|------------|-------|
| Bubble Sort | O(n) | O(n²) | O(n²) | O(1) |
| Selection Sort | O(n²) | O(n²) | O(n²) | O(1) |
| Insertion Sort | O(n) | O(n²) | O(n²) | O(1) |
| Merge Sort | O(n log n) | O(n log n) | O(n log n) | O(n) |
| Quick Sort | O(n log n) | O(n log n) | O(n²) | O(log n) |

## 🎨 Color Legend

- 🟣 **Purple** - Unsorted elements
- 🟡 **Amber** - Elements being compared
- 🔴 **Red** - Elements being swapped
- 🟢 **Green** - Sorted elements

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🤝 Contributing

Contributions are welcome! Feel free to open issues and pull requests.

## 🐛 Bug Reports

Found a bug? Please open an issue with:
- Description of the bug
- Steps to reproduce
- Expected behavior
- Screenshots (if applicable)

---

## 💡 Feature Requests

Have an idea? Open an issue with:
- Feature description
- Use case
- Why it would be useful

## 👨‍💻 Author

**Md Mahfuz Rahman Nirob**

- 📧 Email: njnirob2019@gmail.com
- 🐙 GitHub: [mdmahfuz307](https://github.com/mdmahfuz307)
- 💼 LinkedIn: [mdmahfuz307](https://linkedin.com/in/mdmahfuz307/)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Thanks to all contributors
- Inspired by algorithm visualization tools
- Built with ❤️ using React and Vite

---

## ⭐ Star History

If you like this project, please consider giving it a ⭐!

---

### **LICENSE** (Optional - MIT License)
```
MIT License

Copyright (c) 2025 Md Mahfuz Rahman Nirob

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
---

<div align="center">

### Made with 💜 by Md Mahfuz Rahman Nirob

**[⬆ Back to Top](#-algorithm-visualizer)**

</div>

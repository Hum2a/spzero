<!-- PROJECT LOGO & BADGES -->
<p align="center">
  <img src="public/logo512.png" alt="spzero logo" width="120"/>
</p>

<h1 align="center">spzero – Financial Education Platform</h1>

<p align="center">
  <b>Empowering everyone to master money, credit, and personal finance.</b><br/>
  <i>Modern, interactive, and beautifully designed React app for financial literacy.</i>
</p>

<p align="center">
  <a href="#features"><img src="https://img.shields.io/badge/Features-Modern%20UI-blueviolet?style=flat-square"/></a>
  <a href="#getting-started"><img src="https://img.shields.io/badge/Quick%20Start-Easy-brightgreen?style=flat-square"/></a>
  <a href="#license"><img src="https://img.shields.io/badge/License-Private-important?style=flat-square"/></a>
  <a href="#contributing"><img src="https://img.shields.io/badge/Contributions-Welcome-ff69b4?style=flat-square"/></a>
</p>

---

## 🚀 Demo

> **Live preview coming soon!**
> 
> ![spzero screenshot placeholder](https://via.placeholder.com/900x400?text=spzero+Landing+Page+Screenshot)

---

## ✨ Features

- 🎯 **Interactive Module Selection** – Click any module tile to explore its content
- 📱 **Responsive Design** – Looks great on desktop, tablet, and mobile
- 🎨 **Modern UI** – Gradient backgrounds, card layouts, and smooth animations
- 🧩 **Component-Based** – Clean, maintainable React architecture
- 📝 **Quiz & Learning Actions** – Watch videos, view slides, and take quizzes
- 🌙 **Accessible & Readable** – High-contrast, readable fonts, and keyboard navigation

---

## 🧭 Table of Contents

- [Demo](#-demo)
- [Features](#-features)
- [Table of Contents](#-table-of-contents)
- [Screenshots](#-screenshots)
- [Module Structure](#-module-structure)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Available Scripts](#-available-scripts)
- [Technologies Used](#-technologies-used)
- [Design Highlights](#-design-highlights)
- [FAQ](#-faq)
- [Contributing](#-contributing)
- [Code of Conduct](#-code-of-conduct)
- [License](#-license)
- [Contact](#-contact)

---

## 📸 Screenshots

| Landing Page | Module Detail |
|:---:|:---:|
| ![Landing Page](https://via.placeholder.com/400x250?text=Landing+Page) | ![Module Detail](https://via.placeholder.com/400x250?text=Module+Detail) |

---

## 🏛️ Module Structure

<details>
<summary><b>Click to expand full module breakdown</b></summary>

### <img src="https://img.shields.io/badge/1-Foundations%20of%20Money-blueviolet"/> Foundations of Money

1. **Evolution & Forms of Money**
   - History of Money
   - Time Value of Money
   - Digital Dollars & Stablecoins
   - Take quiz
2. **Borrowing & the Cost of Credit**
   - Why Banks Charge Interest
   - Cost of Borrowing
   - Risk–Return Spectrum
3. **Financial Infrastructure & Consumer Protections**
   - Know Your Rights
   - Insurance Basics
4. **Prices, Markets & Everyday Economics**
   - Supply, Demand & Equilibrium
   - Inflation (Real vs. Nominal)
   - Economic Cycles
5. **Policy Levers & Macro Indicators**
   - The Federal Reserve 101
   - Fiscal Policy
   - Consumer Confidence Index
   - Unemployment & Wages
6. **Global Forces & Trade**
   - Global Trade & Currencies

### <img src="https://img.shields.io/badge/2-Personal%20Finance-4caf50"/> Personal Finance
- Budgeting Basics
- Saving Strategies
- Investment Fundamentals
- Emergency Funds
- Retirement Planning
- Tax Planning

### <img src="https://img.shields.io/badge/3-Credit%2C%20Debt%20%26%20Responsible%20Borrowing-f59e42"/> Credit, Debt & Responsible Borrowing
- Understanding Credit Scores
- Types of Credit
- Managing Debt
- Credit Cards
- Loans and Mortgages
- Debt Consolidation

</details>

---

## 🗂️ Project Structure

```text
spzero/
├── src/
│   ├── components/         # Reusable React components
│   ├── data/               # Module data
│   ├── hooks/              # Custom React hooks
│   ├── App.js              # Main app component
│   ├── App.css             # Styles
│   └── index.js            # Entry point
├── public/                 # Static assets & HTML
├── .github/                # GitHub templates & workflows
├── release.sh              # Release script
├── README.md               # This file
└── ...
```

---

## ⚡ Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v14 or higher)
- npm (comes with Node) or [yarn](https://yarnpkg.com/)

### Quick Start

```bash
# 1. Clone the repository
$ git clone <repository-url>
$ cd spzero

# 2. Install dependencies
$ npm install

# 3. Start the development server
$ npm start

# 4. Open http://localhost:3000 in your browser
```

---

## 🛠️ Available Scripts

| Script           | Description                       |
|------------------|-----------------------------------|
| `npm start`      | Run app in development mode       |
| `npm test`       | Launch test runner                |
| `npm run build`  | Build app for production          |
| `npm run eject`  | Eject from Create React App       |
| `./release.sh`   | Tag & release (see script help)   |

---

## 🧰 Technologies Used

- ![React](https://img.shields.io/badge/React-19.1.0-61dafb?logo=react&logoColor=white)
- ![CSS3](https://img.shields.io/badge/CSS3-Modern-blue?logo=css3&logoColor=white)
- ![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-f7df1e?logo=javascript&logoColor=black)
- ![Create React App](https://img.shields.io/badge/Create%20React%20App-5.0.1-09d3ac?logo=react)
- ![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-CI%2FCD-2088ff?logo=githubactions&logoColor=white)

---

## 🎨 Design Highlights

- **Gradient Background**: Elegant purple gradient for a modern look
- **Card-Based Layout**: Clean, shadowed cards for content
- **Hover & Focus Effects**: Interactive, accessible UI
- **Smooth Animations**: Subtle transitions and slide-ins
- **Responsive Grid**: Adapts to all screen sizes
- **Typography**: Uses Nunito and system fonts for clarity

---

## ❓ FAQ

<details>
<summary><b>How do I add a new module?</b></summary>
Edit <code>src/data/modules.js</code> and follow the structure for existing modules. You can use either the sectioned format (with topics) or the simple list format.
</details>

<details>
<summary><b>How do I deploy this app?</b></summary>
Build with <code>npm run build</code> and deploy the <code>build/</code> folder to your preferred static hosting (Vercel, Netlify, GitHub Pages, etc).
</details>

<details>
<summary><b>How do I run the release script?</b></summary>
Run <code>./release.sh --help</code> for usage instructions. It supports semantic versioning, custom names, and more.
</details>

---

## 🤝 Contributing

We welcome contributions! Please read our [Contributing Guide](CONTRIBUTING.md) and [Code of Conduct](CODE_OF_CONDUCT.md) before submitting issues or pull requests.

---

## 🌐 Code of Conduct

This project follows the [Contributor Covenant](CODE_OF_CONDUCT.md). We are committed to fostering a welcoming and inclusive community.

---

## 📄 License

This project is **private and proprietary** to spzero. All rights reserved.

---

## 📬 Contact

For questions, support, or partnership inquiries, please contact the spzero development team.

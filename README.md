# spzero - Financial Education Platform

A modern, interactive landing page for spzero, a financial education platform. This React application showcases three main learning modules with an intuitive tile-based interface.

## Features

- **Interactive Module Selection**: Click on any of the three module tiles to view detailed content
- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations and hover effects
- **Component-Based Architecture**: Well-organized React components for maintainability

## Module Structure

### Module 1: Foundations of Money
- Understanding Currency
- History of Money
- Money Supply
- Inflation and Deflation
- Interest Rates
- Economic Cycles

### Module 2: Personal Finance
- Budgeting Basics
- Saving Strategies
- Investment Fundamentals
- Emergency Funds
- Retirement Planning
- Tax Planning

### Module 3: Credit, Debt & Responsible Borrowing
- Understanding Credit Scores
- Types of Credit
- Managing Debt
- Credit Cards
- Loans and Mortgages
- Debt Consolidation

## Project Structure

```
src/
├── components/
│   ├── Header.js              # Company header component
│   ├── ModuleTile.js          # Individual module tile
│   ├── ModulesSection.js      # Grid of module tiles
│   ├── ContentItem.js         # Individual content list item
│   ├── ContentSection.js      # Content list display
│   └── index.js               # Component exports
├── data/
│   └── modules.js             # Module data and content
├── hooks/
│   └── useModuleSelection.js  # Custom hook for module selection
├── App.js                     # Main application component
├── App.css                    # Application styles
└── index.js                   # Application entry point
```

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd spzero
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## Technologies Used

- **React 19.1.0** - Frontend framework
- **CSS3** - Styling with modern CSS features
- **JavaScript ES6+** - Modern JavaScript features
- **Create React App** - Development environment

## Design Features

- **Gradient Background**: Beautiful purple gradient background
- **Card-Based Layout**: Clean white cards with subtle shadows
- **Hover Effects**: Interactive hover states for better UX
- **Smooth Animations**: CSS transitions and keyframe animations
- **Responsive Grid**: CSS Grid for flexible module layout
- **Typography**: Modern, readable font hierarchy

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is private and proprietary to spzero.

## Contact

For questions or support, please contact the spzero development team.

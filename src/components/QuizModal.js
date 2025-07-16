import React, { useState } from 'react';

const QuizModal = ({ isOpen, onClose }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 1,
      topic: "History of Money",
      question: "The Gold Standard's End: The Bretton Woods system pegged global currencies to the US Dollar, which was convertible to gold. In 1971, President Nixon ended dollar-to-gold convertibility. What was the most significant outcome of this 'closing of the gold window'?",
      options: [
        "A global economic collapse.",
        "Gold became worthless.",
        "A final shift to fiat currency systems.",
        "The rise of cryptocurrency."
      ],
      correctAnswer: 2,
      explanation: "By ending the dollar's convertibility to gold, the US dollar became a fiat currency (value by government decree). Since many other currencies were pegged to the dollar under Bretton Woods, this effectively moved the entire global financial system away from gold-backed currencies and towards a system where money's value is based on trust in the issuing government."
    },
    {
      id: 2,
      topic: "History of Money",
      question: "Goldsmith's Receipts: Goldsmiths in 17th-century London issued receipts for stored gold, which people began trading as money. What did this practice most directly lead to?",
      options: [
        "The invention of credit cards.",
        "The emergence of paper currency and fractional reserve banking.",
        "The establishment of central banks.",
        "The bartering system."
      ],
      correctAnswer: 1,
      explanation: "Goldsmiths' receipts for gold began to circulate as a form of money. When goldsmiths started lending out a portion of the gold they held (keeping only a 'fraction' in reserve), while still issuing receipts for the full amount, it led to the system of fractional reserve banking and laid the groundwork for paper money."
    },
    {
      id: 3,
      topic: "Time Value of Money",
      question: "Future vs. Present: You can receive $1,000 today or $1,080 one year from now. If you can earn 8% by investing the $1,000 today, which option is financially better?",
      options: [
        "Take $1,000 today.",
        "Take $1,080 in one year.",
        "Both are equal.",
        "Always take the present option."
      ],
      correctAnswer: 0,
      explanation: "If you take $1,000 today and invest it at 8%, you'll have $1,000 * (1 + 0.08) = $1,080 in one year. Since both options result in $1,080 after one year, taking the money today gives you the flexibility to invest it immediately and potentially start earning returns sooner."
    },
    {
      id: 4,
      topic: "Time Value of Money",
      question: "The Shrinking Dollar: You plan to buy a new laptop in one year that costs $2,000 today. If inflation is expected to be 5% over the next year, approximately how much will that same laptop cost in one year?",
      options: [
        "$2,000 (inflation doesn't affect prices this quickly).",
        "$2,050",
        "$2,100",
        "$2,500"
      ],
      correctAnswer: 2,
      explanation: "Inflation means that prices for goods and services generally increase over time. If the laptop costs $2,000 today and inflation is 5%, you can estimate the future cost by calculating 5% of $2,000 (which is $100) and adding it to the original price. $2,000 * 0.05 = $100, $2,000 + $100 = $2,100. This illustrates how inflation erodes the purchasing power of money, meaning you'll need more money in the future to buy the same item."
    },
    {
      id: 5,
      topic: "Time Value of Money",
      question: "Debt Priority: You owe $4,000 on a 19% credit card and $1,200 on a 5% loan. You can pay an extra $150/month. To minimize total interest, what's the best action?",
      options: [
        "Pay extra on the 5% loan.",
        "Pay extra on the 19% credit card.",
        "Split the extra payment.",
        "Consolidate both debts regardless of rate."
      ],
      correctAnswer: 1,
      explanation: "This is the 'debt avalanche' strategy. By prioritizing the debt with the highest interest rate (the 19% credit card), you reduce the amount of interest that accrues most rapidly, saving you the most money in total interest paid and helping you become debt-free faster."
    },
    {
      id: 6,
      topic: "Digital Dollars & Stablecoins",
      question: "Stablecoin Mechanism: Stablecoins aim for a stable value, often pegged to the US Dollar. Which is not a common way they achieve this stability?",
      options: [
        "Holding fiat currency reserves.",
        "Holding liquid asset reserves.",
        "Algorithmic supply adjustments.",
        "Relying purely on user speculation."
      ],
      correctAnswer: 3,
      explanation: "Stablecoins are designed to be stable, not speculative. Their stability mechanisms involve tangible reserves (fiat or other assets) or complex algorithms that adjust supply to maintain their peg, rather than relying solely on the market's speculative interest."
    },
    {
      id: 7,
      topic: "Digital Dollars & Stablecoins",
      question: "Tokenized Advantage: What is a key potential benefit of 'tokenized dollars' or stablecoins over traditional fiat currency for international transactions?",
      options: [
        "Eliminating all regulation.",
        "Faster, cheaper, more transparent remittances.",
        "Guaranteeing transaction anonymity.",
        "Replacing all other global currencies."
      ],
      correctAnswer: 1,
      explanation: "Stablecoins can leverage blockchain technology to facilitate international money transfers (remittances) that are typically much faster, cost less in fees, and offer greater transparency than traditional banking systems, which involve multiple intermediaries."
    },
    {
      id: 8,
      topic: "Digital Dollars & Stablecoins",
      question: "Algorithmic Risk: What's a significant risk of purely algorithmic stablecoins compared to asset-backed ones?",
      options: [
        "They are immune to market volatility.",
        "They are more susceptible to 'death spirals' if confidence is lost.",
        "They require less technical management.",
        "They are only for central banks."
      ],
      correctAnswer: 1,
      explanation: "Purely algorithmic stablecoins lack direct asset backing. If confidence in their ability to maintain the peg falters, or if there's a significant market downturn, the algorithmic mechanism can fail, leading to a rapid and severe devaluation, sometimes called a 'death spiral.'"
    },
    {
      id: 9,
      topic: "Digital Dollars & Stablecoins",
      question: "Digital Wallets: Payment Tech: When paying with your smartphone via a 'digital wallet' at a coffee shop, what technology is most commonly enabling the transaction?",
      options: [
        "Blockchain.",
        "Near Field Communication (NFC).",
        "Quantum computing.",
        "Satellite communication."
      ],
      correctAnswer: 1,
      explanation: "NFC is the wireless technology that allows short-range communication between devices, enabling 'tap-to-pay' functions for mobile wallets and contactless credit cards at payment terminals."
    },
    {
      id: 10,
      topic: "Digital Dollars & Stablecoins",
      question: "Digital Wallets: Security Concern: What is a primary security risk associated with widespread digital wallet use?",
      options: [
        "They are invulnerable to cyberattacks.",
        "Data breaches, phishing, and unauthorized access from compromised devices.",
        "Users carrying too much physical cash.",
        "Lack of any financial regulation."
      ],
      correctAnswer: 1,
      explanation: "While convenient, digital wallets concentrate sensitive financial information on personal devices. If these devices are lost, stolen, or compromised through cyberattacks (like phishing or malware), there's a significant risk of unauthorized access to financial data and potential fraud."
    }
  ];

  const handleAnswerSelect = (answerIndex) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion]: answerIndex
    }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const calculateScore = () => {
    let correct = 0;
    Object.keys(answers).forEach(questionIndex => {
      if (answers[questionIndex] === questions[questionIndex].correctAnswer) {
        correct++;
      }
    });
    return { correct, total: questions.length, percentage: Math.round((correct / questions.length) * 100) };
  };

  const getTopicColor = (topic) => {
    switch (topic) {
      case "History of Money":
        return "#20b2aa";
      case "Time Value of Money":
        return "#48d1cc";
      case "Digital Dollars & Stablecoins":
        return "#40e0d0";
      default:
        return "#20b2aa";
    }
  };

  if (!isOpen) return null;

  return (
    <div className="quiz-modal-overlay">
      <div className="quiz-modal">
        <button className="quiz-modal-close" onClick={onClose}>×</button>
        
        {!showResults ? (
          <>
            <div className="quiz-header">
              <div className="quiz-progress">
                Question {currentQuestion + 1} of {questions.length}
              </div>
              <div className="quiz-topic" style={{ backgroundColor: getTopicColor(questions[currentQuestion].topic) }}>
                {questions[currentQuestion].topic}
              </div>
            </div>

            <div className="quiz-question">
              <h3>{questions[currentQuestion].question}</h3>
            </div>

            <div className="quiz-options">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  className={`quiz-option ${answers[currentQuestion] === index ? 'selected' : ''}`}
                  onClick={() => handleAnswerSelect(index)}
                >
                  {option}
                </button>
              ))}
            </div>

            <div className="quiz-navigation">
              <button 
                className="quiz-nav-btn" 
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
              >
                Previous
              </button>
              
              {currentQuestion === questions.length - 1 ? (
                <button className="quiz-submit-btn" onClick={handleSubmit}>
                  Submit Quiz
                </button>
              ) : (
                <button className="quiz-nav-btn" onClick={handleNext}>
                  Next
                </button>
              )}
            </div>
          </>
        ) : (
          <div className="quiz-results">
            <h2>Quiz Results</h2>
            {(() => {
              const score = calculateScore();
              return (
                <div className="score-display">
                  <div className="score-percentage">{score.percentage}%</div>
                  <div className="score-details">
                    {score.correct} out of {score.total} questions correct
                  </div>
                </div>
              );
            })()}
            
            <div className="results-breakdown">
              <h3>Question Breakdown:</h3>
              {questions.map((q, index) => (
                <div key={q.id} className="result-item">
                  <div className="result-question">
                    <span className="result-number">{q.id}.</span>
                    <span className="result-topic" style={{ backgroundColor: getTopicColor(q.topic) }}>
                      {q.topic}
                    </span>
                    <span className={`result-status ${answers[index] === q.correctAnswer ? 'correct' : 'incorrect'}`}>
                      {answers[index] === q.correctAnswer ? '✓' : '✗'}
                    </span>
                  </div>
                  {answers[index] !== q.correctAnswer && (
                    <div className="result-explanation">
                      <strong>Correct Answer:</strong> {q.options[q.correctAnswer]}
                      <br />
                      <strong>Explanation:</strong> {q.explanation}
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <button className="quiz-restart-btn" onClick={() => {
              setCurrentQuestion(0);
              setAnswers({});
              setShowResults(false);
            }}>
              Retake Quiz
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizModal; 
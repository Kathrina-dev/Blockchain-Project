/**
 * Analyze a transaction for anomalies or fraud.
 * Extend this function with ML model inference as needed.
 * @param {Object} transaction - The transaction object.
 * @returns {Object} - Analysis result.
 */
const analyzeTransaction = (transaction) => {
  const result = {
    flagged: false,
    reasons: [],
  };

  // Example rule: High amount
  if (transaction.amount && transaction.amount > 100000) {
    result.flagged = true;
    result.reasons.push('Transaction amount exceeds threshold.');
  }

  // Example rule: Blacklisted recipient
  const blacklistedAddresses = [
    '0x000000000000000000000000000000000000dead',
    // Add more addresses as needed
  ];
  if (transaction.to && blacklistedAddresses.includes(transaction.to)) {
    result.flagged = true;
    result.reasons.push('Recipient address is blacklisted.');
  }

  // Add more rules or ML model inference here

  return result;
}

module.exports = analyzeTransaction;

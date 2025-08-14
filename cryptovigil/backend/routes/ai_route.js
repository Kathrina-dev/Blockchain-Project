const express = require('express');
const analyzeTransaction = require('../ai/transactionAnalysis');
const analyzeTransactionWithLLM = require('../ai/llmAnalysis'); // LLM-powered analysis
const automateTransaction = require('../ai/transactionAutomation');
const fetchLiveDetails = require('../src/blockchain/liveDetails');
const User = require('../models/User');
const router = express.Router();

/**
 * POST /api/ai/analyze-transaction
 * Body: { transaction: { ... }, useLLM: true/false }
 */
router.post('/analyze-transaction', async (req, res) => {
  console.log('POST /api/ai/analyze-transaction called', req.body);
  const { transaction, useLLM } = req.body;
  if (!transaction) {
    return res.status(400).json({ error: 'Transaction data is required.' });
  }
  if (useLLM) {
    try {
      const result = await analyzeTransactionWithLLM(transaction);
      return res.json(result);
    } catch (e) {
      console.error('LLM analysis error:', e);
      return res.status(500).json({ error: 'LLM analysis failed.' });
    }
  }
  const result = analyzeTransaction(transaction);
  res.json(result);
  console.error('Unexpected error:', err);
    res.status(500).json({ error: 'Unexpected server error.' });
});

/**
 * POST /api/ai/automate-transaction
 * Body: { userId: "...", triggerData: { ... } }
 */
router.post('/automate-transaction', async (req, res) => {
  const { userId, triggerData } = req.body;
  if (!userId || !triggerData) {
    return res.status(400).json({ error: 'userId and triggerData are required.' });
  }
  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ error: 'User not found.' });
    const result = automateTransaction(user, triggerData);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: 'Server error.' });
  }
});

/**
 * GET /api/ai/live-blockchain-details
 * Returns live blockchain node details.
 */
router.get('/live-blockchain-details', async (req, res) => {
  try {
    const details = await fetchLiveDetails();
    res.json(details);
  } catch (err) {
    res.status(500).json({ error: 'Unable to fetch live blockchain details.' });
  }
});

module.exports = router;
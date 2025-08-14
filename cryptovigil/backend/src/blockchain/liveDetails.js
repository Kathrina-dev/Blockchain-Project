const axios = require('axios');

/**
 * Fetch live details from the blockchain node.
 * Replace the URL with your actual blockchain node endpoint.
 */
const fetchLiveDetails = async () => {
  try {
    const response = await axios.get('http://your-blockchain-node-url/live-details'); // Update this URL
    return response.data;
  } catch (error) {
    console.error('Error fetching live details:', error);
    throw new Error('Unable to fetch live details from the blockchain server');
  }
};

module.exports = fetchLiveDetails;
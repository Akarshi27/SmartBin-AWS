const axios = require('axios');

axios.post('http://localhost:5000/api/dashboard/waste-log', {
  userId: 'SETVwToKgMV8qRfS9kLuQgjIdy92',
  category: 'Recyclable',
  confidence: 99.5
}).then(res => {
  console.log("Success!", res.data);
}).catch(err => {
  console.error("Error:", err.response ? err.response.data : err.message);
});

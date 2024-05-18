import React, { useState } from 'react';
import axios from 'axios';

const ShowData = () => {
  const [configId, setConfigId] = useState('');
  const [data, setData] = useState(null);
  const [error, setError] = useState('');

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/configurations/${configId}`);
      setData(response.data);
      setError('');
    } catch (err) {
      setError('Configuration not found');
      setData(null);
    }
  };

  return (
    <div className="container">
      <h2>Fetch Configuration</h2>
      <input
        type="text"
        value={configId}
        onChange={(e) => setConfigId(e.target.value)}
        placeholder="Enter configId"
      />
      <button onClick={fetchData}>Submit</button>
      {error && <p className="error">{error}</p>}
      {data && (
        <div className="data">
          {data.map((row, rowIndex) => (
            <div key={rowIndex}>
              {row.join(', ')}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ShowData;

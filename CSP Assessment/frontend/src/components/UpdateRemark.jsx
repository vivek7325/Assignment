import React, { useState } from 'react';
import axios from 'axios';

const UpdateRemark = () => {
    const [configId, setConfigId] = useState('');
    const [remark, setRemark] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const updateRemark = async () => {
        try {
            const response = await axios.put(`http://localhost:8080/api/configurations/${configId}`, { remark });
            setMessage(response.data.message);
            setError('');
        } catch (err) {
            setError('not found or server error');
            setMessage('');
        }
    };

    return (
        <div className="container">
            <h2>Update Remark</h2>
            <input
                type="text"
                value={configId}
                onChange={(e) => setConfigId(e.target.value)}
                placeholder="Enter configId"
            />
            <textarea
                value={remark}
                onChange={(e) => setRemark(e.target.value)}
                placeholder="Enter new remark"
            ></textarea>
            <button onClick={updateRemark}>Submit</button>
            {message && <p className="success">{message}</p>}
            {error && <p className="error">{error}</p>}
        </div>
    );
};

export default UpdateRemark;

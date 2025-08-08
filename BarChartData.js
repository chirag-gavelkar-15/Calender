import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const BarChartData = ({ date, data, onClose }) => {
  const chartData = data.map(obj => {
    const [key, value] = Object.entries(obj)[0];
    return { name: key, value };
  });

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Data for {date}</h2>
      {chartData.length === 0 ? (
        <div className="text-red-600 font-medium">No data found.</div>
      ) : (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      )}
      <button onClick={onClose} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">Close</button>
    </div>
  );
};

export default BarChartData;
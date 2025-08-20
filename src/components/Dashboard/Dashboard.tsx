import { useState } from 'react';
import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { schemaData } from '../../constants/constants';
import './Dashboard.css';

export const DashboardComponent = () => {
  const [selectedCategory, setSelectedCategory] = useState(schemaData[0]);

  const chartData = selectedCategory.subItems.map((item) => ({
    name: item.name,
    percent: parseInt(item.percent),
    id: item.id,
  }));

  return (
    <div className="dashboard-container">
      <h1>Заказ № 05002</h1>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={chartData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="percent" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="category-selector">
        <h3>Выберите категорию:</h3>
        <div className="category-buttons">
          {schemaData.map((category) => (
            <button
              key={category.id}
              className={`category-btn ${selectedCategory.id === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

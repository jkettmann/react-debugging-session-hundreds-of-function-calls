import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import BarChart from './BarChart';

function Dashboard() {
  const [isLoading, setLoading] = useState(true);
  const [widgets, setWidgets] = useState([]);

  useEffect(() => {
    Axios
      .get('http://localhost:8080/widgets')
      .then((response) => setWidgets(response.data))
      .finally(() => setLoading(false));
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {widgets.includes('BarChart') && <BarChart />}
    </div>
  );
}

export default Dashboard;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { ResponsiveBar } from "@nivo/bar";

// Nivo theming
const theme = {
  axis: {
    ticks: {
      line: {
        stroke: "#e9ecee",
        strokeWidth: 40
      },
      text: {
        fill: "black",
        fontFamily: "BlinkMacSystemFont",
        fontSize: 16
      }
    }
  },
  grid: {
    line: {
      stroke: "#e9ecee",
      strokeWidth: 5
    }
  },
  legends: {
    text: {
      fontFamily: "BlinkMacSystemFont"
    }
  }
};

function BarChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8080/spendings')
      .then((response) => setData(response.data));
  }, []);

  const getDollarAmount = (bar) => {
    console.log('getDollarAmount');
    const amountInDollar = bar.value * bar.data.total_budget;
    return `$${parseFloat(amountInDollar).toFixed(2)}`;
  }

  return (
    <div className="chart" style={{ height: "500px" }}>
      <h4 className="chart-title">Budget Performance</h4>
      <ResponsiveBar
        markers={[
          {
            axis: "x",
            value: 1,
            lineStyle: { stroke: "rgba(0, 0, 0, .35)", strokeWidth: 2 },
            legend: "Goal",
            legendOrientation: "horizontal",
            legendPosition: "top"
          }
        ]}
        enableGridX={false}
        gridXValues={[1]}
        enableGridY={false}
        data={data}
        keys={["budget_status", "over_budget"]}
        indexBy="category"
        margin={{ top: 25, right: 130, bottom: 50, left: 125 }}
        padding={0.3}
        layout="horizontal"
        colors={{ scheme: "set2" }}
        theme={theme}
        borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
        axisBottom={null}
        label={getDollarAmount}
        isInteractive={false}
      />
    </div>
  );
}

export default BarChart;

import "./App.css";
import PieChart from "./Charts/PieChart";
import DoughtnutChart from "./Charts/DoughtnutChart";
import LineChart from "./Charts/LineChart";
import BarChart from "./Charts/BarChart";

function App() {
  return (
    <div className="App">
      <BarChart />
      <LineChart />
      <DoughtnutChart />
      <PieChart />
    </div>
  );
}

export default App;

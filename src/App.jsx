import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Calendar from "./pages/Calendar.jsx";
import MonthlyView from "./pages/MonthlyView.jsx";
import WeeklyView from "./pages/WeeklyView.jsx";
import DailyView from "./pages/DailyView.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/calendar" element={<Calendar />} />
        <Route exact path="/calendar/monthly" element={<MonthlyView />} />
        <Route exact path="/calendar/weekly" element={<WeeklyView />} />
        <Route exact path="/calendar/daily" element={<DailyView />} />
      </Routes>
    </Router>
  );
}

export default App;
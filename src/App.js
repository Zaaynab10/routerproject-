
import './App.css';
import DisplayMovie from './Pages/displayMovies';
import {Routes,Route,Link} from 'react-router-dom'
import DisplayHighHeat from './Pages/displayHighHeat';
import DisplayAshgrove from './Pages/DisplayAshgrove';
import DisplayTakeYourPills from './Pages/DisplayTakeYourPills';
import DisplayPhoneBoot from './Pages/DisplayPhoneBoot';
import DisplayHooneymoon from './Pages/DisplayHooneymoon';
import DisplayViolentNight from './Pages/DisplayViolentNight';
import SideBarre from './sidebare';
function App() {

  return (
    <div className="App">
      <SideBarre />
      <Routes> 
         <Route path="/" element={<DisplayMovie/>} />
            <Route path="/HighHeat" element={<DisplayHighHeat />}  />
            <Route path="/Hooneymoon" element={<DisplayHooneymoon />} />
            <Route path="/Ashgrove" element={<DisplayAshgrove />} />
            <Route path="/ViolentNight" element={<DisplayViolentNight />} />
            <Route path="/TakeYourPills" element={<DisplayTakeYourPills />} />
         
     </Routes>
       
         </div>
    
   

  );
  
}

export default App;

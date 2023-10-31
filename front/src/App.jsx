import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavDash from "./pages/Dashboard/navDash";
import Panel from "./pages/Dashboard/Panel";
import Mapa from "./pages/Dashboard/mapa";
import SensorUno from "./pages/Dashboard/sensorUno";
import SensorDos from "./pages/Dashboard/sensorDos";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavDash />}>
            <Route path="/dashboard" element={<Panel />} />
            <Route path="/dashboard/Mapa" element={<Mapa />} />
            <Route path="/dashboard/Sensor1" element={<SensorUno />} />
            <Route path="/dashboard/Sensor2" element={<SensorDos />} />
            <Route path="/dashboard/Sensor3" element={<Mapa />} />
            <Route path="/dashboard/Sensor4" element={<Mapa />} />
            <Route path="/dashboard/Graficos" element={<Mapa />} />
            <Route path="/dashboard/Filtro" element={<Mapa />} />
            <Route path="/dashboard/Historicos" element={<Mapa />} />
            <Route path="/dashboard/Pagina" element={<Mapa />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

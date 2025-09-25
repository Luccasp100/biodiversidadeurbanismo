import { BrowserRouter, Route, Routes } from "react-router-dom";
import Aves from "./assets/Components/Aves/Aves";
import Menu from "./assets/Components/Menu/Menu";
import ScrollParaCima from "./assets/Components/ScrollParaCima/ScrollParaCima";
import SumarioAve from "./assets/Components/Sumario/SumarioAve";
import SumarioIlustracao from "./assets/Components/Sumario/SumarioIlustracao";
import Ilustracao from "./assets/Components/Ilustracao/Ilustracao";
import Footer from "./assets/Components/Footer/Footer";
import './App.css';
import Header from "./assets/Components/Header/Header";


function App() {
  return (
    <div className="imagemFundoTotal">
      <BrowserRouter>
        <ScrollParaCima />
        <Header/>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/sumarioave" element={<SumarioAve />} />
          <Route path="/aves/:id" element={<Aves />} />
          <Route path="/sumarioilustracao" element={<SumarioIlustracao />} />
          <Route path="/ilustracao/:id" element={<Ilustracao />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
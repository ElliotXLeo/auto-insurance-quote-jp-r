import { useState } from "react";
import styled from "@emotion/styled";

import Header from './components/Header';
import Footer from './components/Footer';
import Formulario from "./components/Formulario";
import Resumen from "./components/Resumen";
import Resultado from "./components/Resultado";


const Contenedor = styled.div`
  position: relative;
  top: 50vh;
  max-width: 640px;
  margin: 0 auto;
  transform: translateY(-50%);
`;

const ContenedorFormulario = styled.div`
  background-color: var(--theme-color);
  padding: 1rem;
  width: 100%;
`;

function App() {

  const [summary, setSummary] = useState({
    safe: 0,
    data: {
      mark: '',
      year: '',
      plan: ''
    }
  });

  const { safe, data } = summary;

  const company = {
    name: '🚗Auto Feliz🚗',
    slogan: 'Asegura tu auto, asegura tu vida.',
    comercialActivity: 'Seguros'
  }

  const currentDate = new Date().getFullYear();
  const author = 'Elliot Garamendi';

  return (
    <Contenedor>
      <Header
        company={company}
      />

      <main className="main">
        <ContenedorFormulario>
          <Formulario
            setSummary={setSummary}
          />
          <Resumen
            data={data}
          />
          <Resultado
            safe={safe}
          />
        </ContenedorFormulario>
      </main>

      <Footer
        currentDate={currentDate}
        author={author}
      />
    </Contenedor>
  );
}

export default App;

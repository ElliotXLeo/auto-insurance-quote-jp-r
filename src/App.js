import { Fragment } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  const company = {
    name: 'Auto Feliz',
    slogan: '🚗Asegura tu auto, asegura tu vida.🚗',
    comercialActivity: 'Seguros'
  }

  const currentDate = new Date().getFullYear();
  const author = 'Elliot Garamendi';

  return (
    <Fragment>
      <Header
        company={company}
      />

      <main className="main">
        <h2>🚗Cotizador de Seguro de Autos🚗</h2>
      </main>

      <Footer
        currentDate={currentDate}
        author={author}
      />
    </Fragment>
  );
}

export default App;

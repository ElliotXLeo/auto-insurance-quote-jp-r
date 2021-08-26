import { Fragment } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  const company = {
    name: 'Cotizador de Seguro de Autos',
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
        <h1>🚗Cotizador de Seguro de Autos🚗</h1>
      </main>

      <Footer
        currentDate={currentDate}
        author={author}
      />
    </Fragment>
  );
}

export default App;

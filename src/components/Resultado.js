import styled from "@emotion/styled";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const ContenedorResultado = styled.div`
  background-color: var(--primary-color-brightness);
  color: var(--text-color);
  padding: 0.5rem;
  align-items: center;
  border-radius: 1rem;
  margin: 0.5rem 0;
`;

const Resultado = ({ safe }) => {


  return (
    (safe <= 0) ?
      (
        <ContenedorResultado>
          <h2>Ingrese todos los datos</h2>
        </ContenedorResultado>
      )
      :
      (
        <TransitionGroup
          component="div"
          className="resultado"
        >
          <CSSTransition
            classNames="resultado"
            key={safe}
            timeout={{ enter: 500, exit: 500 }}
          >
            <ContenedorResultado>
              <h2>Total: S/ {safe}</h2>
            </ContenedorResultado>
          </CSSTransition>
        </TransitionGroup>
      )
  );
}

export default Resultado;
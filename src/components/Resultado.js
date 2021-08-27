import styled from "@emotion/styled";

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
        <ContenedorResultado>
          <h2>Total: S/ {safe}</h2>
        </ContenedorResultado>
      )
  );
}

export default Resultado;
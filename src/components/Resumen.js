import styled from "@emotion/styled";
import { uppercaseFirstLetter } from "../Helper";
import PropTypes from 'prop-types';

const ContenedorResumen = styled.div`
  background-color: var(--primary-color);
  color: var(--text-color);
  padding: 0.5rem;
  align-items: center;
  border-radius: 1rem;
`;

const Resumen = ({ data }) => {

  const { mark, year, plan } = data;

  if (mark === '' || year === '' || plan === '') {
    return (
      null
    );
  } else {
    return (
      <ContenedorResumen>
        <h2>Resumen de cotización</h2>
        <ul>
          <li>Marca: {uppercaseFirstLetter(mark)}</li>
          <li>Año: {year}</li>
          <li>Plan: {uppercaseFirstLetter(plan)}</li>
        </ul>
      </ContenedorResumen>
    );
  }

}

Resumen.propTypes = {
  data: PropTypes.object.isRequired
}

export default Resumen;
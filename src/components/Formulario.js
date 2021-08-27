import styled from "@emotion/styled";
import { Fragment, useState } from "react";
import { lastTenYears, yearsDifference, priceMark, pricePlan } from "../Helper";

const Campo = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;

const CampoLabel = styled.label`
  flex: 0 0 8rem;
`;

const CampoSelect = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  border: 0.1rem solid #e1e1e1;
`;

const CampoInput = styled.input`
  margin: 0 1rem;
`;

const CampoBoton = styled.button`
  background-color: var(--primary-color);
  font-size: 1rem;
  width: 100%;
  padding: 1rem;
  color: var(--text-color);
  font-weight: bold;
  border: none;
  border-radius: 1rem;
  margin: 1rem 0;
  cursor: pointer;
  transition: all 0.5s;

  &:hover{
    filter: brightness(110%);
    color: var(--text-color-inverse);
  }
`;

const Error = styled.div`
  background-color: red;
  color: var(--text-color);
  padding: 1rem;
  margin: 0.5rem 0;
  width: 100%;
  text-align: center;
  font-weight: bold;
  border-radius: 1rem;
`;

const Formulario = ({ setSummary }) => {

  const tenYears = lastTenYears();

  const [datos, setDatos] = useState({
    mark: '',
    year: '',
    plan: ''
  });

  const [error, setError] = useState(false);

  const { mark, year, plan } = datos;

  const getInformation = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mark.trim() === '' || year.trim() === '' || plan.trim() === '') {
      setError(true);
      return;
    }
    setError(false);

    let safe = 2000;
    const difference = yearsDifference(year);

    safe -= difference * safe * 0.03;
    safe = priceMark(mark) * safe;
    safe = pricePlan(plan) * safe;
    setSummary({
      safe,
      datos
    });
  }

  return (
    <Fragment>

      <form
        onSubmit={handleSubmit}
      >
        {
          error ?
            <Error>
              Todos los campos son obligatorios.
            </Error>
            :
            null
        }
        <div>
          <Campo>
            <CampoLabel htmlFor="mark" className="form-label">Marca</CampoLabel>
            <CampoSelect
              id="mark"
              name="mark"
              value={mark}
              required
              onChange={getInformation}
            >
              <option value="">-- Seleccione --</option>
              <option value="americano">Americano</option>
              <option value="europeo">Europeo</option>
              <option value="asiatico">Asiatico</option>
            </CampoSelect>
          </Campo>

          <Campo>
            <CampoLabel htmlFor="year" className="form-label">Año</CampoLabel>
            <CampoSelect
              id="year"
              name="year"
              value={year}
              required
              onChange={getInformation}
            >
              <option value="">-- Seleccione --</option>
              {tenYears.map((year) => {
                return (
                  <option value={year} key={year}>{year}</option>
                );
              })}
            </CampoSelect>
          </Campo>

          <Campo>
            <CampoLabel className="form-label">Plan</CampoLabel>
            <CampoInput
              type="radio"
              name="plan"
              value="basico"
              // required
              checked={plan === "basico"}
              onChange={getInformation}
            /> Básico

            <CampoInput
              type="radio"
              name="plan"
              value="completo"
              // required
              checked={plan === "completo"}
              onChange={getInformation}
            /> Completo
          </Campo>

        </div>
        <CampoBoton type="submit">💸 Cotizar 💸</CampoBoton>
      </form>
    </Fragment>
  );
}

export default Formulario;
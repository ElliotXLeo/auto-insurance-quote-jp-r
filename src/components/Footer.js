import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const ContenedorHeader = styled.header`
  background-color: var(--primary-color);
  padding: 1rem;
  font-weight: bold;
  color: var(--text-color);
  text-align: center;
`;


const Footer = ({ currentDate, author }) => {
  return (
    <ContenedorHeader className="ContenedorHeader animate__animated animate__fadeInUp">
      <p>🦄Copyright &copy; {currentDate} {author}. Todos los derechos reservados.🦄</p>
    </ContenedorHeader>
  );
}

Footer.propTypes = {
  currentDate: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired
}

export default Footer;


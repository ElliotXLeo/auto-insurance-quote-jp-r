import React from "react";
import PropTypes from 'prop-types';
import styled from "@emotion/styled";

const ContenedorHeader = styled.header`
  background-color: var(--primary-color);
  padding: 1rem;
  font-weight: bold;
  color: var(--text-color);
  text-align: center;
`;

const HeaderPrincipal = styled.h1`
  font-size: 2rem;
  margin: 0;
`;

const HeaderName = styled.h2`
  margin: 0;
`;

const HeaderSlogan = styled.p`
  margin: 0;
`;

function Header({ company }) {

  const { name, slogan, comercialActivity } = company;

  return (
    <ContenedorHeader>
      <HeaderPrincipal>{comercialActivity}</HeaderPrincipal>
      <HeaderName className="header__name">{name}</HeaderName>
      <HeaderSlogan>{slogan}</HeaderSlogan>
    </ContenedorHeader>
  );
}

Header.propTypes = {
  company: PropTypes.object.isRequired
}

export default Header;

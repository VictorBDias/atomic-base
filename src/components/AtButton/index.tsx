import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background: #eb9b00;
  padding: 16px 32px;
  border: 2px solid #eb9b00;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    background: #b87900;
    border: 2px solid #b87900;
  }
`;

const AtButton = ({ children }: any) => {
  return <StyledButton>{children}</StyledButton>;
};

export default AtButton;

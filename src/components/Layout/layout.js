import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import { theme } from '../../utils/theme';
import { GlobalStyles } from '../../utils/global';

const StyledContainer = styled.div`
  margin: 0 auto;
  max-width: 1170px;
  min-width: ${theme.devices.xs};
  padding: 0 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;

  .grow {
    flex-grow: 1;
  }
`;

export default function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <StyledContainer>
          <div className="grow">
            <Header />
            {children}
          </div>
          <Footer />
        </StyledContainer>
      </>
    </ThemeProvider>
  );
}

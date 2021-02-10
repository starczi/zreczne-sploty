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

  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
`;

const StyledContent = styled.div`
  flex: 1 1 auto;
`;

export default function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <StyledContainer>
          {/* <div className="grow"> */}
          <Header />
          <StyledContent>{children}</StyledContent>
          {/* </div> */}
          <Footer />
        </StyledContainer>
      </>
    </ThemeProvider>
  );
}

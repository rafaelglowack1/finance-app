import styled, { createGlobalStyle } from 'styled-components';

export const colors = {
  primary: '#0A84FF',
  BackgroundPrimary: '#438cd49f',
  TextPrimary: '#1A1A1A',
  TextSecondary: 'rgba(57, 57, 61, 0.6)',
  background: '#e9e9e9ff',
  Element: '#FFFFFF',
  Profit: '#1DB954',
  BackgroundProfit: '#E8F8ED',
  Loss: '#E74C3C',
  BackgroundLoss: '#FCEDEB',
};

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        background-color: ${colors.background};
        color: ${colors.TextPrimary};
    }
    
`;

export const Container = styled.div`
  max-width: 1700px;
  margin: 0 auto;
`;

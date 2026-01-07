import styled from 'styled-components';
import { colors } from '../../styles';

// navbar
export const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 20px;
`;
export const NavBarSection = styled.div`
  display: flex;
  gap: 10px;
`;
export const NavBarItem = styled.div`
  padding: 10px 15px;
  background-color: ${colors.primary};
  color: ${colors.Element};
  border-radius: 18px;
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  min-width: 60px;
`;
// investment card
export const EncapsulateCardBox = styled.div`
  display: flex;
  gap: 25px;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 40px;
`;

export const CardBox = styled.div`
  width: 400px;
  padding: 22px;
  max-height: 380px;
  background-color: #f0f0f0;
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
  &: hover {
    box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.2);
  }
`;

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const CardTag = styled.div`
  padding: 5px 10px;
  background-color: ${colors.TextSecondary};
  color: ${colors.Element};
  border-radius: 18px;
  border: none;
`;
export const CardTitle = styled.h4`
  font-size: 16px;
  font-weight: 600;
  color: ${colors.TextSecondary};
  margin: 0 0 8px 0;
`;
export const CardValue = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${colors.TextPrimary};
`;
export const CardTotalValue = styled(Card)`
  border-top: 1px solid ${colors.TextSecondary};
  margin-top: 10px;
  padding-top: 20px;
  flex-direction: column;
  justify-content: space-between;
`;
export const CardProfit = styled(Card)`
  background-color: ${colors.BackgroundProfit};
  color: ${colors.Profit};
  padding: 12px;
  border-radius: 8px;
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.1);
`;

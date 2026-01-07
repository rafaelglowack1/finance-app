import styled from 'styled-components';
import { colors } from '../../styles';

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 15px 0 30px 0;
`;

export const Box = styled.div`
    background-color: ${colors.Element};
    width: 23%;
    padding: 25px;
    border-radius: 18px;
    height: 150px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    h3 {
        margin-bottom: 15px;
        font-size: 20px;
        color: ${colors.TextSecondary};
        }
    p {
        font-size: 20px;
        color: ${colors.TextPrimary} ;
        margin: 10px 0;
        font-weight: bold;
        }

        &:nth-child(1) p:last-child {
            color: ${colors.Profit};
    `;

export const ChartContainer = styled.div`
  justify-content: space-between;
  background-color: ${colors.Element};
  padding: 30px;
  width: 1060px;
  border-radius: 18px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  h4 {
    margin-bottom: 20px;
    color: ${colors.TextPrimary};
  }
`;
export const ChartContainerPie = styled(ChartContainer)`
  width: 610px;
  border-radius: 18px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;
export const SummaryContainer = styled.div`
  background-color: ${colors.Element};
  margin-top: 25px;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;
export const SummaryItem = styled.div`
  padding: 20px;
  background-color: ${colors.Element};
  cursor: pointer;
  height: 80px;

  &:hover {
    cursor: pointer;
    background-color: #edeff3ff;
  }
`;

export const SummaryContent = styled.div`
  overflow: hidden;

  opacity: 0;
  max-height: 0;
  transform: translateY(-8px);

  transition:
    opacity 0.2s ease-out,
    transform 0.25s ease-out,
    max-height 0.3s ease-out;

  &.open {
    opacity: 1;
    max-height: 300px;
    transform: translateY(0);
  }
`;

export const SummaryList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  background-color: ${colors.Element};
  border-top: 1px solid ${colors.background};

  &:hover {
    background-color: #e9ecf1ff;
  }
  li {
    padding: 15px;
  }
`;
export const SummaryType = styled(SummaryList)`
  background-color: #f1f3f7ff;
  li {
    padding: 10px 15px;
  }
  &:hover {
    background-color: #f1f3f7ff;
  }
`;

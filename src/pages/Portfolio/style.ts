import styled from 'styled-components';
import { Box, ChartContainer, SummaryItem } from '../Dashboard/style';
import { colors } from '../../styles';

export const BoxPortifolio = styled(Box)`
  width: 31.5%;
  padding: 30px;
  height: 180px;

  h3 {
    margin-bottom: 18px;
    font-size: 24px;
  }
  p {
    font-size: 25px;
    margin: 16px 0;
    font-weight: bold;
  }
`;
// GRÁFICOS
export const GraphContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 40px;
  min-height: 600px;
`;

export const GraphChart = styled(ChartContainer)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 20px;
  width: 40%;
`;

export const LegendItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  width: 100%;
  margin-top: 20px;
`;

export const GraphTitle = styled.h3`
  margin-bottom: 10px;
  padding: 5px;
`;

// RESUMO

export const SumaryBox = styled.li`
  list-style: none;
  width: 100%;
  border-radius: 10px;
`;
export const SummaryTitle = styled(SummaryItem)`
  &:hover {
    cursor: pointer;
    background-color: ${colors.Element};
  }
`;

import styled from "styled-components";
import { colors } from "../../styles";

export const DashboardContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 15px 0 30px 0 ;
    `

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
    `


export const ChartContainer = styled.div`
    justify-content: space-between;
    background-color: ${colors.Element};
    padding: 30px;
    width: 1060px;
    border-radius: 18px;

    h4 {
        margin-bottom: 20px;
        color: ${colors.TextPrimary}
        }
    
    `
export const ChartContainerPie = styled(ChartContainer)`
    width: 610px;
    border-radius: 18px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const SummaryContainer = styled.div`
    background-color: ${colors.Element};
    margin-top: 30px;
`
export const SummaryItem = styled.div`
    padding: 20px;
    border-bottom: 1px solid ${colors.TextSecondary};
    background-color: ${colors.Loss};`
    
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
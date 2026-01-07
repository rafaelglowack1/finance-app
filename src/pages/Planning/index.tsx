import GraficoEconomia from '../../charts/LineChatEconomia';
import GraficoPizzaFinanceiro from '../../charts/PieChartsGastos';
import { Container } from '../../styles';
import { DashboardContainer } from '../Dashboard/style';
import { BoxPortifolio } from '../Portfolio/style';
import { ChartContainerGrid } from './style';

const Planing = () => {
  return (
    <Container>
      <DashboardContainer>
        <BoxPortifolio>
          <h3>Salário Mensal</h3>
          <p>R$ 12.000,00</p>
        </BoxPortifolio>
        <BoxPortifolio>
          <h3>Gastos Totais</h3>
          <p>R$ 7.000,00</p>
        </BoxPortifolio>
        <BoxPortifolio>
          <h3>Economizado no Mês</h3>
          <p>R$ 5.000,00</p>
        </BoxPortifolio>
      </DashboardContainer>
      <ChartContainerGrid>
        <GraficoEconomia />
      </ChartContainerGrid>
      <div>
        <GraficoPizzaFinanceiro />
      </div>
    </Container>
    
  );
};

export default Planing;

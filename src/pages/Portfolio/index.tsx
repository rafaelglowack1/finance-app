import PieChartWithTooltip from '../../charts/PieChart';
import StackedBarChart from '../../charts/TinyBarChart';
import { colors, Container } from '../../styles';
import { DashboardContainer, SummaryContainer, SummaryList } from '../Dashboard/style';
import { BoxPortifolio, GraphChart, GraphContainer, GraphTitle, LegendItem, SumaryBox, SummaryTitle } from './style';

const Portifolio = () => {
  return (
    <Container>
      {/* GERAL */}
      <DashboardContainer>
        <BoxPortifolio>
          <h3>Valor Total da Carteira</h3>
          <p>R$ 185.420,50</p>
        </BoxPortifolio>

        <BoxPortifolio>
          <h3>Total Investido</h3>
          <p>R$ 150.000,00</p>
        </BoxPortifolio>

        <BoxPortifolio>
          <h3>Rentabilidade Acumulada</h3>
          <p>23,61%</p>
          <p style={{ color: colors.Profit }}>+23,61%</p>
        </BoxPortifolio>
      </DashboardContainer>
      {/* GRÁFICOS */}
      <GraphContainer>
        {/* PIE CHART */}
        <GraphChart>
          <GraphTitle>Distribuição por Classe</GraphTitle>
          <PieChartWithTooltip />

          {/* LEGENDA */}
          <LegendItem style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', width: '100%', marginTop: '20px' }}>
            {[
              { label: 'Ações', value: 'R$ 95.300,00', percent: '51,4%' },
              { label: 'FIIs', value: 'R$ 52.000,00', percent: '28,0%' },
              { label: 'Renda Fixa', value: 'R$ 29.000,00', percent: '15,6%' },
              { label: 'BDRs', value: 'R$ 9.100,00', percent: '5,0%' },
            ].map((item, index) => (
              <div key={item.label} style={{ width: '48%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px', borderRadius: '10px', boxShadow: '0 2px 6px rgba(0,0,0,0.15)' }}>
                <div style={{ width: 14, height: 14, borderRadius: '50%', backgroundColor: ['#2563eb', '#16a34a', '#f59e0b', '#dc2626'][index] }} />

                <div>
                  <h4 style={{ margin: 0 }}>{item.label}</h4>
                  <p style={{ margin: 0 }}>{item.value}</p>
                </div>

                <strong>{item.percent}</strong>
              </div>
            ))}
          </LegendItem>
        </GraphChart>

        {/* BAR CHART */}

        <GraphChart style={{ width: '60%' }}>
          <GraphTitle>Rentabilidade Mensal</GraphTitle>
          <StackedBarChart />
        </GraphChart>
      </GraphContainer>
      {/* RESUMO */}
      <SummaryContainer>
        <SummaryTitle>
          <h3>Resumo por Categoria</h3>
        </SummaryTitle>
        <ul style={{}}>
          <SumaryBox>
            <SummaryList style={{ backgroundColor: '#f3f3f5ff', height: '40px', alignItems: 'center' }}>
              <li>Categoria</li>
              <li>Quantidade</li>
              <li>Ivestido</li>
              <li>Valor Atual</li>
              <li>Lucro/Prejuízo</li>
              <li>Rentabilidade</li>
            </SummaryList>
          </SumaryBox>
          <SumaryBox>
            <SummaryList>
              <li>Ações Nacionais</li>
              <li>5</li>
              <li>R$ 75.000,00</li>
              <li>R$ 95.300,00</li>
              <li>+R$ 20.300,00</li>
              <li>+27.07%</li>
            </SummaryList>
          </SumaryBox>
          <SumaryBox>
            <SummaryList>
              <li>Ações Nacionais</li>
              <li>5</li>
              <li>R$ 75.000,00</li>
              <li>R$ 95.300,00</li>
              <li>+R$ 20.300,00</li>
              <li>+27.07%</li>
            </SummaryList>
          </SumaryBox>
          <SumaryBox>
            <SummaryList>
              <li>Ações Nacionais</li>
              <li>5</li>
              <li>R$ 75.000,00</li>
              <li>R$ 95.300,00</li>
              <li>+R$ 20.300,00</li>
              <li>+27.07%</li>
            </SummaryList>
          </SumaryBox>
          <SumaryBox>
            <SummaryList>
              <li>Ações Nacionais</li>
              <li>5</li>
              <li>R$ 75.000,00</li>
              <li>R$ 95.300,00</li>
              <li>+R$ 20.300,00</li>
              <li>+27.07%</li>
            </SummaryList>
          </SumaryBox>
          <SumaryBox>
            <SummaryList>
              <li>Ações Nacionais</li>
              <li>5</li>
              <li>R$ 75.000,00</li>
              <li>R$ 95.300,00</li>
              <li>+R$ 20.300,00</li>
              <li>+27.07%</li>
            </SummaryList>
          </SumaryBox>
        </ul>
      </SummaryContainer>
    </Container>
  );
};

export default Portifolio;

import { useState } from "react"
import Example from "../../charts/lineChart"
import CustomActiveShapePieChart from "../../charts/PieChart"
import { Container } from "../../styles"
import { Box, ChartContainer, ChartContainerPie, DashboardContainer, SummaryContainer, SummaryContent, SummaryItem, SummaryList, SummaryType } from "./style"

const Dashboard = () => {
    const [ativo, setAtivo] = useState(false)

    const Mostrar = () => {
        setAtivo(!ativo)
    }
    return (
        <Container>
            <DashboardContainer>
                <Box>
                    <h3>Patrimônio Total</h3>
                    <p>R$ 185.420,50</p>
                    <p>+8.42%</p>
                </Box>
                <Box>
                    <h3>Total Investido</h3>
                    <p>R$ 150.000,00</p>
                </Box>
                <Box>
                    <h3>Lucro/Prejuízo</h3>
                    <p>R$ 35.420,50</p>
                    <p>+23.61%</p>
                </Box>
                <Box>
                    <h3>Rentabilidade</h3>
                    <p>23.61%</p>
                </Box>
            </DashboardContainer>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', height: '350px'}}>
                <ChartContainer >
                    <h4>Evolução do Patrimônio</h4>
                    <Example />
                </ChartContainer>
                <ChartContainerPie >
                    <CustomActiveShapePieChart />
                    <div>
                        <p>paoskdfad</p>
                        <p>sadasdassd</p>
                        <p>adsadad</p>
                        <p>asddadads</p>
                    </div>
                </ChartContainerPie>

            </div>

            <SummaryContainer>
                <SummaryItem onClick={Mostrar}><h4>Resumo dos Investimentos</h4></SummaryItem>
                <SummaryContent className={ativo ? "open" : ""} >
                    <ul>
                        <li>
                            <SummaryType>
                                <li><h4>Ativo</h4></li>
                                <li><h4>Qtd.</h4></li>
                                <li><h4>Preço Médio</h4></li>
                                <li><h4>Preço Atual</h4></li>
                                <li><h4>Valor Total</h4></li>
                                <li><h4>Variação</h4></li>
                                <li><h4>% Carteira</h4></li>
                            </SummaryType>
                        </li>

                        <li>
                            <SummaryList>
                                <li><p>PETR4</p></li>
                                <li><p>500</p></li>
                                <li><p>R$ 24,90</p></li>
                                <li><p>R$ 29,50</p></li>
                                <li><p>R$ 14.750,00</p></li>
                                <li><p>+18,43%</p></li>
                                <li><p>23,61%</p></li>
                            </SummaryList>
                        </li>
                        <li>
                            <SummaryList>
                                <li><p>PETR4</p></li>
                                <li><p>500</p></li>
                                <li><p>R$ 24,90</p></li>
                                <li><p>R$ 29,50</p></li>
                                <li><p>R$ 14.750,00</p></li>
                                <li><p>+18,43%</p></li>
                                <li><p>23,61%</p></li>
                            </SummaryList>
                        </li>
                        <li>
                            <SummaryList>
                                <li><p>PETR4</p></li>
                                <li><p>500</p></li>
                                <li><p>R$ 24,90</p></li>
                                <li><p>R$ 29,50</p></li>
                                <li><p>R$ 14.750,00</p></li>
                                <li><p>+18,43%</p></li>
                                <li><p>23,61%</p></li>
                            </SummaryList>
                        </li>
                        <li>
                            <SummaryList>
                                <li><p>PETR4</p></li>
                                <li><p>500</p></li>
                                <li><p>R$ 24,90</p></li>
                                <li><p>R$ 29,50</p></li>
                                <li><p>R$ 14.750,00</p></li>
                                <li><p>+18,43%</p></li>
                                <li><p>23,61%</p></li>
                            </SummaryList>
                        </li>
                        <li>
                            <SummaryList>
                                <li><p>PETR4</p></li>
                                <li><p>500</p></li>
                                <li><p>R$ 24,90</p></li>
                                <li><p>R$ 29,50</p></li>
                                <li><p>R$ 14.750,00</p></li>
                                <li><p>+18,43%</p></li>
                                <li><p>23,61%</p></li>
                            </SummaryList>
                        </li>
                    </ul>


                </SummaryContent>
            </SummaryContainer>
            <SummaryContainer>
                <SummaryItem onClick={Mostrar}><h4>Resumo dos Investimentos</h4></SummaryItem>
                <SummaryContent className={ativo ? "open" : ""} >
                    <ul>
                        <li>
                            <SummaryList style={{backgroundColor:'#f1f3f7ff' }}>
                                <li><h4>Ativo</h4></li>
                                <li><h4>Qtd.</h4></li>
                                <li><h4>Preço Médio</h4></li>
                                <li><h4>R$ 29,50</h4></li>
                                <li><h4>Valor Total</h4></li>
                                <li><h4>Variação</h4></li>
                                <li><h4>% Carteira</h4></li>
                            </SummaryList>
                        </li>

                        <li>
                            <SummaryList>
                                <li><p>PETR4</p></li>
                                <li><p>500</p></li>
                                <li><p>R$ 24,90</p></li>
                                <li><p>R$ 29,50</p></li>
                                <li><p>R$ 14.750,00</p></li>
                                <li><p>+18,43%</p></li>
                                <li><p>23,61%</p></li>
                            </SummaryList>
                        </li>
                        <li>
                            <SummaryList>
                                <li><p>PETR4</p></li>
                                <li><p>500</p></li>
                                <li><p>R$ 24,90</p></li>
                                <li><p>R$ 29,50</p></li>
                                <li><p>R$ 14.750,00</p></li>
                                <li><p>+18,43%</p></li>
                                <li><p>23,61%</p></li>
                            </SummaryList>
                        </li>
                        <li>
                            <SummaryList>
                                <li><p>PETR4</p></li>
                                <li><p>500</p></li>
                                <li><p>R$ 24,90</p></li>
                                <li><p>R$ 29,50</p></li>
                                <li><p>R$ 14.750,00</p></li>
                                <li><p>+18,43%</p></li>
                                <li><p>23,61%</p></li>
                            </SummaryList>
                        </li>
                        <li>
                            <SummaryList>
                                <li><p>PETR4</p></li>
                                <li><p>500</p></li>
                                <li><p>R$ 24,90</p></li>
                                <li><p>R$ 29,50</p></li>
                                <li><p>R$ 14.750,00</p></li>
                                <li><p>+18,43%</p></li>
                                <li><p>23,61%</p></li>
                            </SummaryList>
                        </li>
                        <li>
                            <SummaryList>
                                <li><p>PETR4</p></li>
                                <li><p>500</p></li>
                                <li><p>R$ 24,90</p></li>
                                <li><p>R$ 29,50</p></li>
                                <li><p>R$ 14.750,00</p></li>
                                <li><p>+18,43%</p></li>
                                <li><p>23,61%</p></li>
                            </SummaryList>
                        </li>
                    </ul>


                </SummaryContent>
            </SummaryContainer>
        </Container>

    )
}

export default Dashboard
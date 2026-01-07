import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import type { ValueType } from 'recharts/types/component/DefaultTooltipContent';

const data = [
  { mes: 'Jan', economia: 4200, gastos: 6800 },
  { mes: 'Fev', economia: 4500, gastos: 7000 },
  { mes: 'Mar', economia: 4800, gastos: 7300 },
  { mes: 'Abr', economia: 4600, gastos: 7100 },
  { mes: 'Mai', economia: 5000, gastos: 7600 },
  { mes: 'Jun', economia: 4700, gastos: 7400 },
  { mes: 'Jul', economia: 4800, gastos: 7500 },
  { mes: 'Ago', economia: 5200, gastos: 6800 },
  { mes: 'Set', economia: 4500, gastos: 7800 },
  { mes: 'Out', economia: 5000, gastos: 7100 },
  { mes: 'Nov', economia: 5500, gastos: 6500 },
  { mes: 'Dez', economia: 5000, gastos: 7200 },
];

const formatCurrency = (value: ValueType) => `R$ ${value.toLocaleString('pt-BR')}`;

export default function GraficoEconomia() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data} margin={{ top: 20, right: 20, left: 10, bottom: 10 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#eee" />

        <XAxis dataKey="mes" />

        <YAxis tickFormatter={(value) => `R$ ${value / 1000}k`} />

        <Tooltip formatter={(value, name) => [formatCurrency(value), name === 'economia' ? 'Economia' : 'Gastos']} />

        <Legend />

        <Line type="monotone" dataKey="economia" stroke="#22c55e" strokeWidth={2.5} dot={{ r: 5 }} activeDot={{ r: 7 }} name="Economia" />

        <Line type="monotone" dataKey="gastos" stroke="#ef4444" strokeWidth={2.5} dot={{ r: 5 }} activeDot={{ r: 7 }} name="Gastos" />
      </LineChart>
    </ResponsiveContainer>
  );
}

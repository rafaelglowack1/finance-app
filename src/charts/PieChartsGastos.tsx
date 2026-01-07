import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import type { ReactNode } from 'react';


type PieData = {
  name: string;
  value: number;
  color: string;
};

const data: PieData[] = [
  { name: 'Economizado', value: 5000, color: '#22c55e' },
  { name: 'Moradia', value: 2500, color: '#3b82f6' },
  { name: 'Alimentação', value: 1200, color: '#16a34a' },
  { name: 'Transporte', value: 800, color: '#facc15' },
  { name: 'Saúde', value: 600, color: '#a855f7' },
  { name: 'Educação', value: 1000, color: '#ef4444' },
  { name: 'Lazer', value: 500, color: '#0ea5e9' },
  { name: 'Outros', value: 400, color: '#9ca3af' },
];

const formatCurrency = (value: number): string =>
  `R$ ${value.toLocaleString('pt-BR')}`;

type LabelProps = {
  name?: string;
  value?: number;
};

const renderLabel = ({ name, value }: LabelProps): ReactNode => {
  if (!name || value === undefined) return null;
  return `${name}: ${formatCurrency(value)}`;
};

export default function GraficoPizzaFinanceiro() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={120}
          label={renderLabel}
          labelLine
        >
          {data.map((entry) => (
            <Cell key={entry.name} fill={entry.color} />
          ))}
        </Pie>

        <Tooltip
          formatter={(value: number) => formatCurrency(value)}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}

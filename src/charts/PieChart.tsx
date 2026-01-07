import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, type PieLabelRenderProps } from 'recharts';

/* ================== TIPOS ================== */
type PieDataItem = {
  name: string;
  value: number;
};

/* ================== DADOS MOCK ================== */
const data: PieDataItem[] = [
  { name: 'Ações', value: 95300 },
  { name: 'FIIs', value: 52000 },
  { name: 'Renda Fixa', value: 29000 },
  { name: 'BDRs', value: 9100 },
];

/* ================== CONSTANTES ================== */
const RADIAN = Math.PI / 180;
const COLORS = ['#2563eb', '#16a34a', '#f59e0b', '#dc2626'];

/* ================== LABEL ================== */
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: PieLabelRenderProps) => {
  if (cx == null || cy == null || innerRadius == null || outerRadius == null) {
    return null;
  }

  const radius = innerRadius + (outerRadius - innerRadius) * 0.55;
  const x = cx + radius * Math.cos(-(midAngle ?? 0) * RADIAN);
  const y = cy + radius * Math.sin(-(midAngle ?? 0) * RADIAN);

  return (
    <text x={x} y={y} fill="#fff" fontSize={13} fontWeight={600} textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${((percent ?? 0) * 100).toFixed(0)}%`}
    </text>
  );
};

/* ================== COMPONENTE ================== */
export default function PieChartWithTooltip() {
  return (
    <ResponsiveContainer width="100%" height={320}>
      <PieChart>
        <Pie data={data} dataKey="value" cx="50%" cy="50%" innerRadius="45%" outerRadius="80%" labelLine={false} label={renderCustomizedLabel}>
          {data.map((entry, index) => (
            <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>

        <Tooltip formatter={(value: number, _name, props) => [`R$ ${value.toLocaleString('pt-BR')}`, props.payload.name]} />
      </PieChart>
    </ResponsiveContainer>
  );
}

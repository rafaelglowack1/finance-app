import { AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import { colors } from '../styles';

const data = [
  { month: 'Jan', value: 1200 },
  { month: 'Fev', value: 1800 },
  { month: 'Mar', value: 1500 },
  { month: 'Abr', value: 2200 },
  { month: 'Mai', value: 1900 },
  { month: 'Jun', value: 2400 },
  { month: 'Jul', value: 2600 },
  { month: 'Ago', value: 2800 },
  { month: 'Set', value: 3000 },
  { month: 'Out', value: 3200 },
  { month: 'Nov', value: 3100 },
  { month: 'Dez', value: 3500 },
];

export default function Example() {
  return (
    <div style={{ width: '100%', height: 250 }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip formatter={(v) => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} />
          <Area type="monotone" dataKey="value" stroke={colors.primary} fill={colors.BackgroundPrimary} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

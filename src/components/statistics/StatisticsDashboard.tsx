
import React from 'react';
import { DateRange } from 'react-day-picker';
import { subDays } from 'date-fns';
import DateRangePicker from './DateRangePicker';
import StatsOverviewCards from './StatsOverviewCards';
import StatisticsTabs from './StatisticsTabs';

const StatisticsDashboard: React.FC = () => {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: subDays(new Date(), 7),
    to: new Date(),
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="cms-heading">Estatísticas</h1>
        
        <div className="flex items-center gap-4">
          <DateRangePicker date={date} setDate={setDate} />
        </div>
      </div>

      <StatsOverviewCards />
      <StatisticsTabs />
    </div>
  );
};

export default StatisticsDashboard;

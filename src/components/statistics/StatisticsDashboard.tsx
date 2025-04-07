
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart, PieChart, AreaChart, Legend, Tooltip, XAxis, YAxis, CartesianGrid, Bar, Pie, Area, ResponsiveContainer } from 'recharts';
import { DateRange } from 'react-day-picker';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar as CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { format, subDays } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const mockDailyStats = [
  { date: '01/04', pageViews: 120, uniqueVisitors: 85 },
  { date: '02/04', pageViews: 145, uniqueVisitors: 92 },
  { date: '03/04', pageViews: 158, uniqueVisitors: 101 },
  { date: '04/04', pageViews: 132, uniqueVisitors: 89 },
  { date: '05/04', pageViews: 178, uniqueVisitors: 112 },
  { date: '06/04', pageViews: 194, uniqueVisitors: 125 },
  { date: '07/04', pageViews: 167, uniqueVisitors: 108 },
];

const mockPageStats = [
  { name: 'Página Inicial', views: 580, percentage: 35 },
  { name: 'Sobre Nós', views: 240, percentage: 15 },
  { name: 'Serviços', views: 320, percentage: 20 },
  { name: 'Blog', views: 210, percentage: 13 },
  { name: 'Contato', views: 170, percentage: 10 },
  { name: 'Outros', views: 120, percentage: 7 },
];

const mockDeviceStats = [
  { name: 'Desktop', value: 65 },
  { name: 'Mobile', value: 30 },
  { name: 'Tablet', value: 5 },
];

const COLORS = ['#1e40af', '#3b82f6', '#60a5fa', '#93c5fd', '#bfdbfe', '#dbeafe'];

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
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-auto justify-start text-left font-normal"
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date?.from ? (
                  date.to ? (
                    <>
                      {format(date.from, 'dd/MM/yyyy', { locale: ptBR })} -{' '}
                      {format(date.to, 'dd/MM/yyyy', { locale: ptBR })}
                    </>
                  ) : (
                    format(date.from, 'dd/MM/yyyy', { locale: ptBR })
                  )
                ) : (
                  <span>Selecione a data</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="end">
              <Calendar
                initialFocus
                mode="range"
                defaultMonth={date?.from}
                selected={date}
                onSelect={setDate}
                numberOfMonths={2}
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Total de Visualizações</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">1.094</div>
            <p className="text-sm text-green-600 mt-1">+12% em relação ao período anterior</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Visitantes Únicos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">712</div>
            <p className="text-sm text-green-600 mt-1">+8% em relação ao período anterior</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Tempo Médio</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">2m 47s</div>
            <p className="text-sm text-red-600 mt-1">-5% em relação ao período anterior</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Visão Geral</TabsTrigger>
          <TabsTrigger value="pages">Por Página</TabsTrigger>
          <TabsTrigger value="devices">Por Dispositivo</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Visualizações e Visitantes Únicos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={mockDailyStats}
                    margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area 
                      type="monotone" 
                      dataKey="pageViews" 
                      name="Visualizações" 
                      stroke="#1e40af" 
                      fill="#3b82f6" 
                      fillOpacity={0.6} 
                    />
                    <Area 
                      type="monotone" 
                      dataKey="uniqueVisitors" 
                      name="Visitantes Únicos" 
                      stroke="#0891b2" 
                      fill="#06b6d4" 
                      fillOpacity={0.6} 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="pages">
          <Card>
            <CardHeader>
              <CardTitle>Visualizações por Página</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={mockPageStats}
                      layout="vertical"
                      margin={{ top: 20, right: 30, left: 100, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" />
                      <YAxis type="category" dataKey="name" />
                      <Tooltip />
                      <Legend />
                      <Bar 
                        dataKey="views" 
                        name="Visualizações" 
                        fill="#1e40af" 
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={mockPageStats}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="percentage"
                        nameKey="name"
                        label={({ name, percentage }) => `${name}: ${percentage}%`}
                      >
                        {mockPageStats.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="devices">
          <Card>
            <CardHeader>
              <CardTitle>Visualizações por Dispositivo</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={mockDeviceStats}
                      cx="50%"
                      cy="50%"
                      labelLine={true}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                      nameKey="name"
                      label={({ name, value }) => `${name}: ${value}%`}
                    >
                      {mockDeviceStats.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default StatisticsDashboard;

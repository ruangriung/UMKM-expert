import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp } from 'lucide-react';

const serviceData = [
  { name: 'Sertifikasi Halal', requests: 120 },
  { name: 'Pembuatan NIB', requests: 98 },
  { name: 'Desain Logo & Menu', requests: 86 },
  { name: 'Booth Custom', requests: 65 },
  { name: 'Pendaftaran Merchant', requests: 45 },
  { name: 'Website UMKM', requests: 30 },
];

const COLORS = ['#1e3c72', '#f0a500', '#2a5298', '#d69300', '#4a72b8', '#bf7f00'];

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 text-xl font-bold tracking-tight">
            <span className="text-blue-900">RuangRiung</span>
            <span className="text-slate-800">Admin</span>
          </div>
          <a href="/" className="text-sm font-semibold text-slate-500 hover:text-blue-900 transition-colors">
            &larr; Kembali ke Website
          </a>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-slate-900 mb-2">Dashboard Insight</h1>
          <p className="text-slate-500">Visualisasi data permintaan layanan dan analitik untuk perencanaan paket layanan mendatang.</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Bar Chart Section */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900 mb-6 font-sans">Distribusi Permintaan Layanan</h2>
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={serviceData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                  <XAxis 
                    dataKey="name" 
                    tick={{fill: '#64748b', fontSize: 12}} 
                    tickMargin={10} 
                    axisLine={{stroke: '#cbd5e1'}}
                    tickLine={false}
                  />
                  <YAxis 
                    tick={{fill: '#64748b', fontSize: 12}} 
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip 
                    cursor={{fill: '#f1f5f9'}}
                    contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}}
                  />
                  <Bar dataKey="requests" name="Total Permintaan" fill="#1e3c72" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="mt-4 text-sm text-slate-500 leading-relaxed">
              Sertifikasi Halal dan NIB mendominasi permintaan layanan, menunjukkan tingginya kebutuhan legalitas dasar sebelum pelaku usaha berinvestasi pada fasilitas fisik seperti booth.
            </p>
            <div className="mt-4 flex items-center gap-2 text-sm font-medium text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-md w-fit">
              <TrendingUp size={16} />
              <span>Naik 12% dari bulan lalu</span>
            </div>
          </div>
          
          {/* Pie Chart Section */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900 mb-6 font-sans">Proporsi Layanan</h2>
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={serviceData}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={120}
                    fill="#8884d8"
                    paddingAngle={2}
                    dataKey="requests"
                    labelLine={false}
                  >
                    {serviceData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value: number) => [`${value} Permintaan`, '']}
                    contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}}
                  />
                  <Legend 
                    layout="vertical" 
                    verticalAlign="middle" 
                    align="right"
                    wrapperStyle={{fontSize: '12px'}}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <p className="mt-4 text-sm text-slate-500 leading-relaxed">
              Insight ini menyarankan pembuatan paket "Starter Legalitas" bundling Halal + NIB sebagai entry point kuat untuk up-selling ke layanan Booth dan Desain.
            </p>
            <div className="mt-4 flex items-center gap-2 text-sm font-medium text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-md w-fit">
              <TrendingUp size={16} />
              <span>Konversi paket naik 5%</span>
            </div>
          </div>
          
        </div>
      </main>
    </div>
  );
}

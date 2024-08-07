import React from 'react';
import { BarChart, Bar, LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Slide = ({ children, title, centerTitle = false }) => (
  <div className="bg-gradient-to-r from-teal-100 to-cyan-100 p-8 rounded-lg shadow-lg mb-8">
    <h2 className={`text-3xl font-bold mb-6 text-teal-800 ${centerTitle ? 'text-center' : ''}`}>{title}</h2>
    {children}
  </div>
);

const trafficData = [
  { month: 'Jan', traffic: 80000 },
  { month: 'Feb', traffic: 85000 },
  { month: 'Mar', traffic: 95000 },
  { month: 'Apr', traffic: 100000 },
  { month: 'May', traffic: 110000 },
  { month: 'Jun', traffic: 120000 },
];

const conversionData = [
  { month: 'Jan', rate: 1.8 },
  { month: 'Feb', rate: 2.0 },
  { month: 'Mar', rate: 2.2 },
  { month: 'Apr', rate: 2.3 },
  { month: 'May', rate: 2.5 },
  { month: 'Jun', rate: 2.7 },
];

const mrrData = [
  { month: 'Jan', mrr: 100000 },
  { month: 'Feb', mrr: 110000 },
  { month: 'Mar', mrr: 125000 },
  { month: 'Apr', mrr: 130000 },
  { month: 'May', mrr: 145000 },
  { month: 'Jun', mrr: 160000 },
];

const keywordData = [
  { month: 'Jan', branded: 1000, nonBranded: 5000 },
  { month: 'Feb', branded: 1200, nonBranded: 5500 },
  { month: 'Mar', branded: 1500, nonBranded: 6000 },
  { month: 'Apr', branded: 1800, nonBranded: 6500 },
  { month: 'May', branded: 2000, nonBranded: 7000 },
  { month: 'Jun', branded: 2200, nonBranded: 7500 },
];

export default function SaaSSEOReport() {
  return (
    <div className="bg-gray-100 p-4">
      <Slide title="SaaS SEO Performance Report - Q2 2024" centerTitle={true}>
        <div className="text-center">
          <p className="text-xl text-teal-600 mb-4">Driving Growth Through SEO</p>
          <p className="text-lg">Prepared by: Your SaaS SEO Team</p>
        </div>
      </Slide>

      <Slide title="Key Performance Indicators">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-bold mb-2 text-teal-700">Organic Traffic</h3>
            <p className="text-3xl text-cyan-600">+50%</p>
            <p>Year-over-Year</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-bold mb-2 text-teal-700">Trial Signups</h3>
            <p className="text-3xl text-cyan-600">2.7%</p>
            <p>Conversion Rate</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-bold mb-2 text-teal-700">MRR from SEO</h3>
            <p className="text-3xl text-cyan-600">$160K</p>
            <p>60% increase YoY</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-bold mb-2 text-teal-700">Customer Acquisition Cost</h3>
            <p className="text-3xl text-cyan-600">-25%</p>
            <p>Decrease from Q1</p>
          </div>
        </div>
      </Slide>

      <Slide title="Organic Traffic Growth">
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={trafficData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="traffic" stroke="#0d9488" fill="#5eead4" />
          </AreaChart>
        </ResponsiveContainer>
        <p className="mt-4 text-center text-teal-700">50% increase in organic traffic from January to June</p>
      </Slide>

      <Slide title="Trial Signup Conversion Rate">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={conversionData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="rate" stroke="#0891b2" />
          </LineChart>
        </ResponsiveContainer>
        <p className="mt-4 text-center text-teal-700">Trial signup conversion rate improved from 1.8% to 2.7%</p>
      </Slide>

      <Slide title="Monthly Recurring Revenue (MRR) Growth">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={mrrData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="mrr" fill="#0d9488" />
          </BarChart>
        </ResponsiveContainer>
        <p className="mt-4 text-center text-teal-700">60% Year-over-Year MRR growth, reaching $160K in June</p>
      </Slide>

      <Slide title="Branded vs Non-Branded Keyword Performance">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={keywordData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="branded" stroke="#0d9488" />
            <Line type="monotone" dataKey="nonBranded" stroke="#0891b2" />
          </LineChart>
        </ResponsiveContainer>
        <p className="mt-4 text-center text-teal-700">Consistent growth in both branded and non-branded keyword rankings</p>
      </Slide>

      <Slide title="Key Achievements">
        <ul className="list-disc pl-6 space-y-2 text-teal-800">
          <li>Launched 15 new feature pages, driving 20% more organic traffic to product section</li>
          <li>Implemented schema markup for software products, increasing CTR by 15%</li>
          <li>Created an SEO-optimized knowledge base, reducing support tickets by 30%</li>
          <li>Improved site speed by 40%, leading to 10% increase in overall conversions</li>
        </ul>
      </Slide>

      <Slide title="Areas for Improvement">
        <ul className="list-disc pl-6 space-y-2 text-teal-800">
          <li>Blog bounce rate remains high at 75% for organic traffic</li>
          <li>Limited visibility for competitor comparison keywords</li>
          <li>Opportunity to improve localization for international markets</li>
          <li>Need to increase backlinks from authoritative tech and business sites</li>
        </ul>
      </Slide>

      <Slide title="Q3 2024 Targets">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-bold mb-2 text-teal-700">Organic Traffic</h3>
            <p className="text-2xl text-cyan-600">+30%</p>
            <p>compared to Q2</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-bold mb-2 text-teal-700">Trial Signup Rate</h3>
            <p className="text-2xl text-cyan-600">3.0%</p>
            <p>conversion goal</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-bold mb-2 text-teal-700">MRR from SEO</h3>
            <p className="text-2xl text-cyan-600">+25%</p>
            <p>compared to Q2</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-bold mb-2 text-teal-700">CAC</h3>
            <p className="text-2xl text-cyan-600">-15%</p>
            <p>further reduction</p>
          </div>
        </div>
      </Slide>

      <Slide title="Q3 2024 Action Plan">
        <ol className="list-decimal pl-6 space-y-2 text-teal-800">
          <li>Develop a content strategy focusing on bottom-of-funnel keywords</li>
          <li>Create comparison pages for top 10 competitors to improve visibility</li>
          <li>Implement hreflang tags and create localized content for key markets</li>
          <li>Launch a digital PR campaign to earn backlinks from tech publications</li>
          <li>Optimize onboarding process to improve trial-to-paid conversion rate</li>
        </ol>
      </Slide>

      <Slide title="Thank You!" centerTitle={true}>
        <div className="text-center">
          <p className="text-xl mb-4 text-teal-700">Questions? Suggestions?</p>
          <p className="font-semibold text-cyan-600">Next report scheduled for: October 5, 2024</p>
        </div>
      </Slide>
    </div>
  );
}

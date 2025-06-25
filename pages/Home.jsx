import { useState } from 'react';
import LeadForm from '../components/LeadForm';
import LeadList from '../components/LeadList';

export default function Home() {
  const [leads, setLeads] = useState([]);

  const addLead = (lead) => {
    setLeads([...leads, lead]);
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Lead Management</h1>
      <LeadForm addLead={addLead} />
      <LeadList leads={leads} />
    </div>
  );
}

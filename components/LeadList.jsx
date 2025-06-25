export default function LeadList({ leads }) {
  return (
    <div className="p-4 bg-gray-50 rounded shadow mt-4">
      {leads.length === 0 ? (
        <p className="text-gray-600">No leads added yet.</p>
      ) : (
        <ul className="divide-y">
          {leads.map((lead, idx) => (
            <li key={idx} className="py-2">
              <p className="font-semibold">{lead.name}</p>
              <p className="text-sm text-gray-500">{lead.email} | {lead.phone}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

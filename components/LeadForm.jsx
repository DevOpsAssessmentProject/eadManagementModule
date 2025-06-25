import { useState } from 'react';

export default function LeadForm({ addLead }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!form.name) errs.name = "Name is required";
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) errs.email = "Valid email required";
    if (!form.phone || !/^\d{10}$/.test(form.phone)) errs.phone = "10-digit phone required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    addLead(form);
    setForm({ name: '', email: '', phone: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-white rounded shadow">
      <input
        type="text"
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="input"
      />
      {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

      <input
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="input"
      />
      {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

      <input
        type="tel"
        placeholder="Phone (10 digits)"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
        className="input"
      />
      {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

      <button type="submit" className="btn w-full bg-blue-500 text-white">Add Lead</button>
    </form>
  );
}

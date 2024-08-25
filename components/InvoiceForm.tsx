"use client";
import React from "react";

function InvoiceForm() {
  const [total, setTotal] = React.useState<string>("");
  const [currency, setCurrency] = React.useState<string>("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log({ total, currency });
  }

  return (
    <div>
      <h2 className="text-lg text-red-400">Create new invoice</h2>
      <form action="" className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="total"
          className="border rounded-md"
          value={total}
          onChange={(e) => setTotal(e.target.value)}
        />
        <input
          type="text"
          placeholder="currency"
          className="border rounded-md"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        />
        <button
          className="bg-blue-400 px-4 py-1 text-white rounded-md"
          type="submit"
        >
          create invoice
        </button>
      </form>
    </div>
  );
}

export default InvoiceForm;

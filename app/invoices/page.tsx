import InvoiceForm from "@/components/InvoiceForm";
//import { fetchAllInvoices } from "@/libs/data";
import React from "react";

async function InvoicesPage() {
  //const allInvoices = await fetchAllInvoices();
  return (
    <div className="flex flex-col gap-6">
      {/*    <h1 className="text-3xl">Fetching all Invoices</h1>

      <ul className="max-h-[300px] overflow-y-auto border rounded-md">
        {allInvoices.map((invoice) => (
          <li key={invoice.id}>
            <span>{invoice.id.slice(1, 4)}</span>
            <span>
              {invoice.total} - {invoice.currency}
            </span>
          </li>
        ))}
      </ul>
      <InvoiceForm /> */}
    </div>
  );
}

export default InvoicesPage;

import { Invoice } from "@prisma/client";
import React from "react";

type Props = {
  invoices: Invoice[];
};

function InvoicesList({ invoices }: Props) {
  return (
    <div className="border rounded-md p-2">
      <h2 className="text-lg text-red-400">Invoices</h2>
      <ul>
        {invoices.map((invoice) => (
          <li key={invoice.id}>
            <span>{invoice.id.slice(1, 4)}</span>
            <span>
              {invoice.total} - {invoice.currency}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default InvoicesList;

import InvoiceCard from "./InvoiceCard";

function Invoices({ invoices }) {
  return (
    <div className="flex flex-col gap-5">
      {invoices &&
        invoices.map(({ clientName, id, paymentDue, status, total }, index) => {
          return (
            <InvoiceCard
              clientName={clientName}
              id={id}
              paymentDue={paymentDue}
              total={total}
              status={status}
              key={index}
            />
          );
        })}
    </div>
  );
}

export default Invoices;

import { useEffect, useState } from "react";
import Header from "../components/Header";
import InvoiceCard from "../components/InvoiceCard";
import { getAll } from "../request";
import CardSkleton from "../components/CardSkleton";
import Invoices from "../components/Invoices";

function Home() {
  const [invoices, setInvoices] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getAll("/invoices")
      .then((data) => {
        setInvoices(data);
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Header />
      <div className="md:ml-28">
        <div className="mx-auto h-screen w-full max-w-4xl overflow-y-auto px-4">
          {!loading && <Invoices /> ? (
            <Invoices invoices={invoices} />
          ) : (
            <CardSkleton />
          )}
        </div>
      </div>
    </>
  );
}

export default Home;

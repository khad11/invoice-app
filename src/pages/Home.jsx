import { useEffect, useState } from "react";
import Header from "../components/Header";
import InvoiceCard from "../components/InvoiceCard";
import { getAll } from "../request";
import CardSkleton from "../components/CardSkleton";
import Invoices from "../components/Invoices";
import { useStore } from "../lib/zustand";

function Home() {
  const [invoices, setInvoices] = useState(null);
  const [loading, setLoading] = useState(false);
  const { backendFilterRequestG } = useStore();

  useEffect(() => {
    setLoading(true);
    getAll(
      `/invoices${backendFilterRequestG === "" ? backendFilterRequestG : `?status=${backendFilterRequestG}`}`,
    )
      .then((data) => {
        setInvoices(data);
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [backendFilterRequestG]);

  return (
    <>
      <Header
        backendFilterRequestG={backendFilterRequestG}
        count={invoices?.length}
      />
      <div className="md:ml-28">
        <div className="mx-auto h-[750px] w-full max-w-4xl overflow-y-auto scroll-smooth px-4">
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

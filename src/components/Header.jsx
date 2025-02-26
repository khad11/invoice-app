import Filter from "./Filter";
import UnversalSheet from "./UnversalSheet";

function Header() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold leading-8 -tracking-tight">
          Invoices
        </h1>
        <span className="text-[12px hidden leading-[15px] text-slate-400 md:block">
          There are 7 total invoices
        </span>
        <span className="text-[12px leading-[15px] text-slate-400 md:hidden">
          7 invoices
        </span>
      </div>

      <div className="md:10 flex items-center justify-between gap-5">
        <Filter />
        <UnversalSheet />
      </div>
    </div>
  );
}

export default Header;

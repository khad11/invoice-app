import Filter from "./Filter";
import UnversalSheet from "./UnversalSheet";

function Header({ count }) {
  return (
    <div className="pb-10 pt-28 md:pl-28">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-4">
        <div>
          <h1 className="text-3xl font-bold leading-8 -tracking-tight">
            Invoices
          </h1>
          <span className="text-[12px hidden leading-[15px] text-slate-400 md:block">
            There are {count} total invoices
          </span>
          <span className="text-[12px leading-[15px] text-slate-400 md:hidden">
            7 invoices
          </span>
        </div>

        <div className="flex items-center justify-between gap-5">
          <Filter />
          <UnversalSheet />
        </div>
      </div>
    </div>
  );
}

export default Header;

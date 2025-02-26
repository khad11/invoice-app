import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { PlusCircle } from "lucide-react";
import { Button, buttonVariants } from "./ui/button";

function UnversalSheet({ children }) {
  return (
    <div className="flex items-center gap-3 rounded-3xl bg-[#7C5DFA] p-2">
      <PlusCircle className="rounded-full text-white" />
      <Sheet className="">
        <SheetTrigger className="flex gap-1 text-white">
          New <span className="md:bloock hidden">Invoices</span>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="w-full max-w-full sm:max-w-[80%] md:max-w-[80%] md:pl-24"
        >
          <SheetHeader>
            <SheetTitle className="text-2xl leading-5">New invoices</SheetTitle>
          </SheetHeader>
          <div className="h-full overflow-y-auto pb-20">{children}</div>
          <div className="justify-betweenn absolute bottom-0 left-0 right-0 flex w-full items-center border-t-2 bg-white p-3">
            <SheetTrigger className={buttonVariants({ variant: "outline" })}>
              Discard
            </SheetTrigger>
            <div className="flex items-center justify-between gap-3">
              <Button variant="secondary">Save as Draft</Button>
              <Button>Save & Send</Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
export default UnversalSheet;

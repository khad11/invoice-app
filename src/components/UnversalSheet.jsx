import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { PlusCircle, PlusCircleIcon } from "lucide-react";

function UnversalSheet() {
  return (
    <div className="flex items-center gap-3 rounded-3xl bg-[#7C5DFA] p-2">
      <PlusCircle className="rounded-full text-white" />

      <Sheet>
        <SheetTrigger className="flex gap-1 text-white">
          Filter <span className="md:bloock hidden">by status</span>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default UnversalSheet;

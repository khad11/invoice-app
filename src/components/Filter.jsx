import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function Filter() {
  const [selectedStatus, setSelectedStatus] = useState(["All"]);

  const toggleStatus = (status, checked) => {
    setSelectedStatus(
      status === "All"
        ? ["All"]
        : checked
          ? selectedStatus.filter((s) => s !== "All").concat(status)
          : selectedStatus.filter((s) => s !== status),
    );
  };
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="max-w-[200px] justify-between">
            Filter<span className="max-[385px]:hidden">by status</span>
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[200px]">
          {["draft", "pending", "paid"].map((status) => (
            <DropdownMenuCheckboxItem
              key={status}
              checked={selectedStatus.includes(status)}
              onCheckedChange={(checked) => toggleStatus(status, checked)}
            >
              {status}
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

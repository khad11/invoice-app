import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Status from "./Status";
import { dateFormatter } from "../lib/utils";

function InvoiceCard({
  id = "sf333",
  clientName = "johnn Dore",
  paymentDue = "12.02.1220",
  total = "1800.90",
  status = "pending",
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>#{id}</CardTitle>
        <CardDescription>{clientName}</CardDescription>
      </CardHeader>
      <CardContent>{dateFormatter(paymentDue)}</CardContent>
      <CardFooter className="flex items-center justify-between">
        <span>
          {(+total).toLocaleString("en-GB", {
            style: "currency",
            currency: "GBP",
          })}
        </span>
        <Status status={status} />
      </CardFooter>
    </Card>
  );
}

export default InvoiceCard;

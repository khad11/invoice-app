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

function InvoiceCard({ id, clientName, paymentDue, status, total }) {
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

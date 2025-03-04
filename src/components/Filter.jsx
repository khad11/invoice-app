import React, { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa";
import { Button } from "./ui/button";
import { Check, Users } from "lucide-react";
import { useStore } from "../lib/zustand";

export default function Filter() {
  const [statuses, setStatuses] = useState({
    draft: false,
    pending: false,
    paid: false,
  });
  const [open, setOpen] = useState(false);
  const [backendFilterRequest, setBackendFilterRequest] = useState("");
  const { backendFilterRequestG, setBackendFilterRequestG } = useStore();

  useEffect(() => {
    let str = "";
    for (const key in statuses) {
      if (statuses[key]) {
        if (str === "") {
          str += key;
        } else {
          str += `|${key}`;
        }
      }
    }
    setBackendFilterRequest(str);
  }, [statuses]);

  useEffect(() => {
    setBackendFilterRequestG(backendFilterRequest);
  }, [backendFilterRequest]);

  function handleClick() {
    setOpen(!open);
  }

  function handleCheck(status) {
    setStatuses((prev) => {
      let finalRresult = null;
      if (status !== "" && prev[""]) {
        finalRresult = { ...prev, [status]: !statuses[status], all: false };
      } else {
        finalRresult = { ...prev, [status]: !statuses[status] };
      }
      return finalRresult;
    });
  }

  return (
    <div className="relative w-[130px]">
      <Button className="w-full" onClick={handleClick} variant="ghost">
        <span className="flex gap-2">
          Filter <span className="hidden md:flex">by status</span>
        </span>

        {open ? <FaChevronUp /> : <FaChevronDown />}
      </Button>

      {open && (
        <div className="absolute top-11 z-40 w-full rounded-md bg-gray-50 p-1 shadow-md dark:bg-neutral-900">
          <ul>
            {Object.entries(statuses).map(([status, check], index) => {
              return (
                <li key={index}>
                  <Button
                    onClick={() => handleCheck(status)}
                    className="w-full justify-between capitalize"
                    variant="ghost"
                  >
                    {status}
                    {check && <Check />}
                  </Button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

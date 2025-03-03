import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa";

export default function Filter() {
  const [selectedStatus, setSelectedStatus] = useState(["All"]);
  // Dropdown ochiq-yopiqligini boshqarish uchun
  const [open, setOpen] = useState(false);

  // Statusni almashtirish funksiyasi
  const toggleStatus = (status, checked) => {
    setSelectedStatus(
      status === "All"
        ? // Agar "All" tanlansa, faqat "All" ni qoldiramiz
          ["All"]
        : checked
          ? // Aks holda belgilangan statuslarni (All'ni olib tashlab) massivga qo‘shamiz
            selectedStatus.filter((s) => s !== "All").concat(status)
          : // Yoki o‘chiramiz
            selectedStatus.filter((s) => s !== status),
    );
  };

  // Ko'rsatmoqchi bo'lgan statuslar ro'yxati
  const statuses = ["All", "draft", "pending", "paid"];

  return (
    <div className="relative inline-block">
      {/* Trigger tugma */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
      >
        Filter <span className="hidden md:flex">by status</span>
        <span className="ml-3">
          {open ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </button>

      {/* Dropdown ochiq bo'lsa, status ro'yxati ko'rsatiladi */}
      {open && (
        <div className="absolute left-0 mt-2 w-40 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <ul className="py-1">
            {statuses.map((status) => {
              const isChecked = selectedStatus.includes(status);
              return (
                <li
                  key={status}
                  className="flex cursor-pointer items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  {/* Checkbox orqali belgilash */}
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={(e) => toggleStatus(status, e.target.checked)}
                    className="mr-2"
                  />
                  {status}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

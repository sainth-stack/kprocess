import { useState, useEffect } from "react";

export default function useRegisterDevice() {
  const _breadcrumbs = [
    { name: "Home", url: "/dashboard" },
    { name: "OT Assets", url: "/ot-assests" },
    { name: "Register a Device", url: "/register-device" },
  ];
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [search, setSearch] = useState("")
  const [step,setStep] = useState(1)
  return {
    _breadcrumbs,
    page, setPage, rowsPerPage, setRowsPerPage,
    setSearch,
    search,
    step,
    setStep
  };
}

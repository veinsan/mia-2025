"use client";

import { useState } from "react";

export default function useToast() {
  const [toast, setToast] = useState(null);

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  };

  return { toast, showToast };
}
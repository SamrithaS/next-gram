"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export const ClientComponent = () => {
  const pathname = usePathname();

  useEffect(() => {
    console.log(pathname);
  }, [pathname]);

  return null;
};

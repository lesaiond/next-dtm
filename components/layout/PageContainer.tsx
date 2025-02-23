"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { usePageStore } from "@/store/usePageStore";

export default function PageContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { setCurrentPage, currentPage } = usePageStore();

  useEffect(() => {
    setCurrentPage(pathname);
  }, [pathname, setCurrentPage]);

  if (currentPage === "/authorization") {
    return null;
  }

  if (/^\/exams\/\d+$/.test(pathname)) {
    return null;
  }

  return <>{children}</>;
}

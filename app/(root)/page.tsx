"use client";

import { useEffect } from "react";

import { Modal } from "@/components/ui/modal";
import { useStoreModal } from "@/hooks/use-store-modal";

export default function SetupPage() {
  const isOpen = useStoreModal((state) => state.isOpen);
  const onOpen = useStoreModal((state) => state.onOpen);
  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);
  return <div className="p-4">Root Page</div>;
}

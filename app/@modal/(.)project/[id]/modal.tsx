"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { buttonVariants } from "@/components/ui/button";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<React.ElementRef<"dialog">>(null);

  useEffect(() => {
    dialogRef.current?.showModal();
  }, []);

  const closeModal = (e: React.MouseEvent<HTMLDialogElement, MouseEvent>) =>
    e.target === dialogRef.current && router.back();

  return (
    <dialog
      ref={dialogRef}
      onClick={closeModal}
      onClose={router.back}
      className="w-9/12 overscroll-none text-3xl backdrop:bg-black/40 backdrop:backdrop-blur-sm"
    >
      <div>{children}</div>
    </dialog>
  );
}

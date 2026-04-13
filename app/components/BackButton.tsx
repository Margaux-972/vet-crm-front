"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();
  return (
    <button
      className="mb-4 flex items-center gap-2 text-gray-600 hover:text-black cursor-pointer"
      onClick={() => router.back()}
    >
      ← Retour
    </button>
  );
}

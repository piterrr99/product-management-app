'use client'

import { redirect } from "next/navigation";

export default function Error({
    reset,
  }: {
    error: Error & { digest?: string };
    reset: () => void;
  }) {
    return(
      <main className="flex h-full flex-col items-center justify-center">
				<h2 className="text-center">¡Ups! Algo salió mal</h2>
			</main>
    )
  }
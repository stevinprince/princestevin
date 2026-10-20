import { Suspense } from "react";
import { connection } from "next/server";

async function CurrentYear() {
  await connection();
  return <>{new Date().getFullYear()}</>;
}

export function CopyrightYear() {
  return (
    <Suspense fallback={<>2026</>}>
      <CurrentYear />
    </Suspense>
  );
}

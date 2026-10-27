"use client";

import { ReactNode } from "react";

type ClientProvidersProps = {
  children: ReactNode;
};

export default function ClientProviders({ children }: ClientProvidersProps) {
  // Hydration boundary: the mobile menu drawer starts closed on the server and
  // reaches its first client state without triggering a mismatch.
  return <>{children}</>;
}

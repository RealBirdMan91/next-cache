"use client";

import { getQueryClient } from "./get-query-client";
import { QueryClientProvider } from "@tanstack/react-query";

export default function Provider({ children }: any) {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

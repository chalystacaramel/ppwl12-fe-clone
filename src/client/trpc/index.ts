// IMPORTANT: trpc is only allowed to be used in client components
import {
  createTRPCClient,
  httpBatchLink,
  loggerLink,
} from '@trpc/client';
import { QueryClient } from '@tanstack/react-query';
// Use 'import type' to prevent server code from being bundled
import type { AppRouter } from '@/server/trpc/router';
import superjson from 'superjson';
import { createTRPCOptionsProxy } from '@trpc/tanstack-react-query';

export const queryClient = new QueryClient();

export const trpcClient = createTRPCClient<AppRouter>({
  links: [
    loggerLink({
      enabled: (op) =>
        process.env.NODE_ENV === 'development' ||
        (op.direction === 'down' && op.result instanceof Error),
    }),
    httpBatchLink({
      url: '/api/trpc',
      transformer: superjson,
    }),
  ],
});

export const trpc = createTRPCOptionsProxy<AppRouter>({
  client: trpcClient,
  queryClient,
});
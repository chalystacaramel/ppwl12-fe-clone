export type AppRoute = {
  path: string;
  label: string;
};

/** Semua route aplikasi — sumber kebenaran tunggal */
export const routeTree: AppRoute[] = [
  { path: "/",             label: "Home"    },
  { path: "/page-2",       label: "Page 2"  },
  { path: "/page-example", label: "Example" },
];

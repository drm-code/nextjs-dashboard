import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Invoices jsj",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

import { Inter } from "next/font/google";
import { Provider } from "@/components/provider";
import "./global.css";

export const metadata = {
  metadataBase: new URL("https://rasterzero-dev.github.io/svelte-tv-docs"),
  title: {
    default: "Svelte TV",
    template: "%s | Svelte TV",
  },
  description: "Svelte for Lightning TV apps.",
};

const inter = Inter({
  subsets: ["latin"],
});

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}

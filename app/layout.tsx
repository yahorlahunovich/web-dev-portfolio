import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Egor Lagunovich",
  description: "Portfolio of website front-end developer Egor Lagunovich.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="text-white bg-mainBlue">
        <main>{children}</main>
      </body>
    </html>
  );
}

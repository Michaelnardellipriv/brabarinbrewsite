import type { Metadata } from "next";
import "./globals.css";
import "./styles.css";
import "./home.css";
import "./museo/museo.css";
import "./shop/shop.css";
import "./galleria/galleria.css";
import "./eventi/eventi.css";
import "./distillerie/distillerie.css";
import "./contatti/contatti.css";

export const metadata: Metadata = {
  title: "Barbarian Brew Museum",
  description: "Il museo della birra dove la storia incontra il gusto",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
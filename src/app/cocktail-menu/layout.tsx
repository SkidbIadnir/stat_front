import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Family Cocktail Menu | Stat Front",
  description: "Carefully crafted cocktails and drinks for special family gatherings. Browse our selection of classic cocktails, signature creations, and non-alcoholic mocktails.",
  keywords: ["cocktails", "drinks", "family", "menu", "classic cocktails", "signature drinks", "mocktails", "non-alcoholic"],
  openGraph: {
    title: "Family Cocktail Menu",
    description: "Carefully crafted cocktails and drinks for special family gatherings",
    type: "website",
    images: [
      {
        url: "/cocktail-menu-og.jpg", // You can add this image later
        width: 1200,
        height: 630,
        alt: "Family Cocktail Menu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Family Cocktail Menu",
    description: "Carefully crafted cocktails and drinks for special family gatherings",
  },
};

export default function CocktailMenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

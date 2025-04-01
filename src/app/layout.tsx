import "./globals.css";
import { Inter, Plus_Jakarta_Sans, Poppins } from "next/font/google";

export const inter = Inter({ subsets: ["latin"], weight: ["400"] });
export const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
export const poppins = Poppins({ subsets: ["latin"], weight: ["500", "600"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

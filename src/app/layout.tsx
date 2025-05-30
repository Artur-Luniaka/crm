import "./globals.css";
import { Inter, Plus_Jakarta_Sans, Poppins } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["400"] });
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
const poppins = Poppins({ subsets: ["latin"], weight: ["500", "600"] });

export const metadata = {
  title: "Home | CRM",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${jakarta.className} ${poppins.className}`}
      >
        {children}
      </body>
    </html>
  );
}

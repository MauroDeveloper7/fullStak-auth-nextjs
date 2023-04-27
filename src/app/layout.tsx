import AppBar from "@/components/AppBar";
import "./globals.css";

export const metadata = {
  title: "Next-Auth Tutorial",
  description: "Generated by Sakura Dev",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppBar />
        {children}
      </body>
    </html>
  );
}
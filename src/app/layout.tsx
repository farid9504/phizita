import "../styles/global.scss";
import { ReactNode } from "react";
export default function RootLayout({ children }: { children: ReactNode }) {
  const theme = "light";
  return (
    <html dir="rtl" data-theme={theme}>
      <body>
        <main className="w-[100vw] h-[100vh] overflow-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}

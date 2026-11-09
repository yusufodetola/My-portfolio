import "./globals.css";
import "@fontsource-variable/inter";
import "@fontsource-variable/noto-sans-arabic";

export const metadata = {
  title: "Yusuf Odetola | Frontend Developer",
  description: "Frontend Developer, UI/UX Designer and AI Automation Engineer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#060b17] text-slate-50">{children}</body>
    </html>
  );
}

import "../css/styles.css";
import "../css/admin.css";

export const metadata = {
  metadataBase: new URL("https://skypc.in"),
  title: "SKYPC",
  description: "On-site computer, laptop, printer, CCTV and AMC service in Jaipur.",
  icons: { icon: "/images/logo.jpg" }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,560&family=Manrope:wght@500;600;700;800&family=Outfit:wght@600;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}

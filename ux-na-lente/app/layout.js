import "./globals.css";

export const metadata = {
  title: "UX na Lente",
  description: "Melhorando a experiência do usuário na câmera da JOVI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
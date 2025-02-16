
import Todo from "./Component/Tod";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
        {children}
        <Todo/>
      </body>
    </html>
  );
}

import "@/styles/globals.css";
export const metadata = {
  title: "Al-Huda",
  authors: [
    {
      name: "Sanjay & Kannan",
    },
  ],
  creator: "Al-Huda Educational Solutions",
  };

const RootLayout = ({ children }: { children: React.ReactNode; }) => {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;

import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="font-poppins min-h-screen">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}

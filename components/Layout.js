import Footer from "@components/Footer";
import Navbar from "@components/Navbar";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-600 to-gray-900 text-white">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

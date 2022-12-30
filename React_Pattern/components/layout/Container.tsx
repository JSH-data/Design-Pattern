import Header from "./Header";
import Footer from "./Footer";

export default function Container({ children }: { children: JSX.Element }) {
  return (
    <div className="container">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

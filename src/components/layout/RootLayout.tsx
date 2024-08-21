import Footer from "./Footer";
import Header from "./Header";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout(props: RootLayoutProps) {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}

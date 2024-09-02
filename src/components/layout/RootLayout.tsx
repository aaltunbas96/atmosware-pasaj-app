import useGetLanguage from "@/hooks/useGetLanguage";
import Footer from "./Footer";
import Header from "./Header";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout(props: RootLayoutProps) {
  useGetLanguage();

  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}

import Header from "./Header";
import Footer from "./Footer";
export default function Layout({ config, children }) {
  return (
    <>
      <Header config={config}></Header>
      <main>{children}</main>
      <Footer config={config}></Footer>
    </>
  );
}

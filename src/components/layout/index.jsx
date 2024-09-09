import Header from "./Header";
export default function Layout({ config, children }) {
  return (
    <>
      <Header config={config}></Header>
      <main>{children}</main>
      <footer></footer>
    </>
  );
}

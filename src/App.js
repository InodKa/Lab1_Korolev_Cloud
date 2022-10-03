import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Header from "./components/Header/header";


export function App() {
  return <div style={{
    display: 'flex',
    justifyContent: "space-between",
    flexDirection: 'column',
    height: '100vh'
  }}><Header /><Main /><Footer /></div >;
}
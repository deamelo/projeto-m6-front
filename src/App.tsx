import Footer from "./components/Footer";
import Header from "./components/Header";
import InitSection from "./components/InitSection";
import ProductTypeList from "./components/ProductTypeList";

function App() {
  return (
    <>
      <Header />
      <InitSection />
      <ProductTypeList productType="Leilão" />
      <ProductTypeList productType="Carros" />
      <ProductTypeList productType="Motos" />
      <Footer />
    </>
  );
}

export default App;

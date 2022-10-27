import InitSection from "../../components/InitSection"
import ProductTypeList from "../../components/ProductTypeList"

const Home = () => {
    return (
        <>
            <InitSection />
            <ProductTypeList productType="Leilão" />
            <ProductTypeList productType="Carros" />
            <ProductTypeList productType="Motos" />
        </>
    )
}

export default Home
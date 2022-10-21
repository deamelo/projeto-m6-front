import { StyledProductTypeList } from "./styles"

interface ProductTypeListProps {
    productType: string
}

const ProductTypeList = ({ productType }: ProductTypeListProps) => {
    return (
        <StyledProductTypeList>
            <h2>{productType}</h2>
            <ul></ul>
        </StyledProductTypeList>
    )
}

export default ProductTypeList
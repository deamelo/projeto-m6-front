import { StyledCard } from "./styles"

const CardProductsHome = () => {
    return (
        <>
            <StyledCard>
                <figure>
                    <img src="" alt="product img" />
                </figure>
                <h3>Title</h3>
                <span>Description</span>
                <div>
                    <img src="" alt="avatar" />
                    <p>Owner</p>
                </div>
                <div>
                    <div>
                        <h3>0 KM</h3>
                        <h3>Year</h3>
                    </div>
                    <h3>R$ 00.000,00</h3>
                </div>
            </StyledCard>
        </>
    )
}

export default CardProductsHome
import { connect} from "react-redux";


function toogleProduct(product) {
    return {
        type: 'TOOGLE_PRODUCT',
        product
    }      
}

const ListProducts = ({products, toogleProduct}) => {

    return (
        <div>
            <h2>Lista de Produtos</h2>
            {products.map(product => (
                <div key={product.id}>
                    <h3>{product.title}</h3>
                    <p>Valor: R$ {product.value},00</p>
                    <button onClick={() => (toogleProduct(product))}>Selecionar Curso</button>
                </div>
            ))}
        </div>
    )
}
const mapStateToProps = state =>({
    products: state.products
})

const mapDispatchToProps = dispatch => ({
    toogleProduct: (product) => dispatch(toogleProduct(product))
})

export default connect(mapStateToProps, mapDispatchToProps) (ListProducts);
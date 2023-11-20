import data from "../components/data"
import './Home.css'

const Home = () => {
  return (
    <div>
    <h2>Feauterd Products</h2>
    <div className="products">
    {
      data.products.map(product => (
        <div className="product" key={product.slug}>
          <a href={`/product/${product.slug}`}>
            <img src = {product.image} alt={product.name} className="productImage"/>
          </a>
          <div className="productInfo">
            <a className="productName" href={`/product/${product.slug}`}>
              <p>{product.name}</p>
            </a>
            <p><strong>$ {product.price}</strong></p>
            <button>Add to cart</button>
          </div>
        </div>
      ))
    }
    </div>
</div>
  )
}

export default Home

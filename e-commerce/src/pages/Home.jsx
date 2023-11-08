import data from "../components/data"

const Home = () => {
  return (
    <div>
    <h1>Feauterd Products</h1>
    <div className="products">
    {
      data.products.map(product => (
      <div className="product" key={product.slug}>
        <a href={'/product/${product.slug}'}>
        <img src = {product.image} alt={product.name} />
        </a>
        <div className="productInfo">
        <a  href={'/product/${product.slug}'}>
          <p>{product.name}</p>
          </a>
          <p><strong>{product.price}</strong></p>
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

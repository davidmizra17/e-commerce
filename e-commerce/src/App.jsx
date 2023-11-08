import data  from "./components/data";




function App() {
  return (
    <div>
      <header>
        <a href='/'>amazona</a>
      </header>
      <main>
        <h1>Feauterd Products</h1>
        <div className="products">
        {
          data.products.map(product => (
          <div className="product" key={product.slug}>
            <img src = {product.image} alt={product.name} />
            <div className="productInfo">
              <p>
                {product.name}
              </p>
              <p>
                {product.price}
              </p>
            </div>
          </div>
          ))
        }
        </div>
      </main>
    </div>  
  );
}

export default App

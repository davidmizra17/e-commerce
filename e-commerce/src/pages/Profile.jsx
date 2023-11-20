import './Profile.css'
import data from "../components/data"

const Profile = () => {
  return (
    <section>
    <h2>Historial del usuario</h2>
    <hr />
    <div id="container">

        <section id='purchases'>
            
            <header id='Subtitle'><h3>Articulos comprados</h3></header>

            <article id='products'>
                {
                    data.products.map(product => (
                        <div id="product" key={product.slug}>

                            <a id='areaImage' href={`/product/${product.slug}`}>
                                <img src = {product.image} alt={product.name} id="productImage"/>
                            </a>

                            <div id="productInfo">
                                <a id="productName" href={`/product/${product.slug}`}>
                                    <p>{product.name}</p>
                                </a>

                                <p>
                                    <strong>$ {product.price}</strong>
                                </p>
                            </div>

                        </div>
                    ))
                }
            </article>
        </section>
        
        <hr />

        <section id='Records'>
            <header id='Subtitle'><h3>Estadisticas</h3></header>

            <article>
                <p>Hola</p>
            </article>

        </section>

    </div>
</section>
  )
}

export default Profile

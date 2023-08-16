//Предаем пропс
function Clothes({itemsForSale}) {
    return(
        <div className="products">
            {/* //здесь прописываем пропс */}
            {itemsForSale.map((element => {
                const {id, name, searchTerm, price, image} = element;
                return(
                    <div key={id} className="product-card">
                        <img src={image} width="300px" height="400px" alt="clothes"/>
                        <div className="product-info">
                            <h3>{name}</h3>
                            <h4>$ {price}</h4>
                        </div>
                    </div>
                )
            }))}
        </div>
    )
}
export default Clothes;
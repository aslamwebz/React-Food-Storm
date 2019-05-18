import React from 'react'

const Card = (props) => {
    
    const image = `img/${props.item.path}`

   return(
    <React.Fragment>
        <article className="card">
            <header className="card__thumb">
                <a href="#"><img src={image}/></a>
            </header>
            <div className="card__date">
                <span className="card__date__day">$ {props.item.price}</span>
            </div>
            <div className="card__body">
                <div className="card__category"><a href="#">{props.item.type}
                </a></div>
                
                <h4 className="card__title"><a href="#">{props.item.name}</a></h4>
                {/* <div className="card__subtitle">an ice cream sundae party！</div> */}
                <p className="card__description">{props.item.details}</p>
            </div>
            <br/>
            <footer className="card__footer">
                <button className="btn btn-info btn-sm" onClick={props.add}>Add To Cart</button>

                {/* <span className="icon ion-clock"></span> 10 mins ago */}
                {/* <span className="icon ion-chatbox"></span><a href="#"> 145 comments</a> */}
            </footer>
        </article>
    </React.Fragment>
   )
}


{/* <img classNameName="" src={image} alt={props.item.item.path} />
<p>{props.item.item.details}</p>
<h5 classNameName="card-title">{props.item.item.name}</h5>
<div classNameName="btn-group">
<button classNameName="btn btn-info btn-sm">Info</button>
<i className="fas fa-solar-panel    ">&nbsp;</i>
<button classNameName="btn btn-primary btn-sm">Add to cart</button></div> */}

// Card.propTypes = {
//     cart: PropTypes.array
// };

// const mapStateToProps = state => ({
//     cart:state.cart.cart
// })


// export default connect(mapStateToProps, { addToCart })(Card)

export default Card
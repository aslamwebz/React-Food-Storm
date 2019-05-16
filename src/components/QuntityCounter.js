import React,{useState} from 'react'

const QuantityCounter = () => {

    const [quantity, setQuantity] = useState(1)

    const quantityHandler = (operation) => {
        if(operation === 'plus'){
            setQuantity(quantity + 1)
        }

        if(operation === 'minus'){
            if(quantity !== 1){
                setQuantity(quantity - 1)
            }
        }
    }

    const content = (
        <div >
            <button className="btn btn-primary btn-sm" onClick={(() => quantityHandler('minus'))}>-</button>
            <span className="quantity m-4">{quantity}</span>
            <button className="btn btn-primary btn-sm" onClick={(() => quantityHandler('plus'))}>+</button>
        </div>
    )

    return content;
}


export default QuantityCounter
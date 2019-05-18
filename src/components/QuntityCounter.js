import React,{useState} from 'react'

const QuantityCounter = (props) => {


    const [quantity, setQuantity] = useState(1)

    const quantityHandler = (operation) => {
        if(operation === 'plus'){
            setQuantity(quantity + 1)
                props.priceChange(props.val, 'plus')
        }

        if(operation === 'minus'){
            if(quantity !== 1){
                setQuantity(quantity - 1)
                props.priceChange(props.val, 'minus')

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
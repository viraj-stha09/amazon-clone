import React from 'react';
import './Subtotal.css';
import CurrencyFprmat from "react-currency-format";
import {useStateValue} from "./StateProvider";

function Subtotal(){
    const [{basket}] = useStateValue();
    var total = 0;
    const getTotalOfBasket = ({basket}) => {
        basket.map((singleProduct) =>
            total += singleProduct.price
        );
        return total;
    };

    return (
        <div className="subtotal">
            <CurrencyFprmat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket?.length} items): <strong>{value}</strong>
                        </p>
                        <small className="subtotal_gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getTotalOfBasket({basket})}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal;
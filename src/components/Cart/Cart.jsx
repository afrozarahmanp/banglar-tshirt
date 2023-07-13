

const Cart = ({ cart, handleRemoveFromCart }) => {
    
    return (
        <div>
            <h2>Order summary: {cart.length}</h2>
            {
                cart.map(tshirt => <p
                    key={tshirt._id}
                >{tshirt.name}
                    <button onClick={() => handleRemoveFromCart(tshirt._id)}>X</button>
                </p>)
            }
        </div>
    );
};

export default Cart;


/*
// Conditional Rendeering
- Use if else
- ternary: condition? 'for true': 'false '
*/ 
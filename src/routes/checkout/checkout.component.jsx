import { useSelector } from 'react-redux'

import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector'

import CheckoutItem from '../../components/checkout-item/checkout-item.component'

import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from './checkout.styles'
import PaymentForm from '../../components/payment-form/payment-form.component'

const HeaderBlockItems = [
   { name: 'Product' },
   { name: 'Description' },
   { name: 'Quantity' },
   { name: 'Price' },
   { name: 'Remove' },
]

const Checkout = () => {
   const cartItems = useSelector(selectCartItems)
   const cartTotal = useSelector(selectCartTotal)

   return (
      <CheckoutContainer>
         <CheckoutHeader>
            {HeaderBlockItems.map(({ name }) => (
               <HeaderBlock key={name}>
                  <span>{name}</span>
               </HeaderBlock>
            ))}
         </CheckoutHeader>
         {cartItems.map((cartItem) => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
         ))}
         <Total>Total: ${cartTotal}</Total>
         <PaymentForm />
      </CheckoutContainer>
   )
}

export default Checkout

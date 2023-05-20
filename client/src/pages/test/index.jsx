import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const index = () => {
  return (
    <StripeCheckout
                name="CHARITY LIFE"
                image="https://charitylifefoundation.files.wordpress.com/2020/06/cropped-20200604_030003-2.png"
                billingAddress
                shippingAddress
                description={`Donate and make someonce life better`}
                amount={1000}
                token={() => {}}
                stripeKey={
                  "pk_test_51LSNp7IFgBGrRGBPLrWtRg83OflcYL1h8uktQki0Tdfg9OnnyRf8f0M51usgQgolTSvtPDAgsPdCsmz2q9EsZCT200ko6ijbjS"
                }
              >
              </StripeCheckout>
  )
}

export default index
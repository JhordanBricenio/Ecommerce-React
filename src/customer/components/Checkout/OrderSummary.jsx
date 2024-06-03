import { Button } from "@mui/material"
import Addresscard from "../AddressCard/AddressCard"
import CartItem from "../Cart/CartItem"

const OrderSummary = () => {
  return (
    <div>
        <div className="p-5 rounded-s-md border">
            <Addresscard />
        </div>
        <div>
      <div className="lg:grid grid-cols-3  relative mt-5">
        <div className="col-span-2 ">
          {[1,1,1,1].map((item)=><CartItem />)}
        </div>
        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <div className="border p-3">
            <p className="uppercase font-bold opacity-60 pb-4">Price details</p>
            <hr />
            <div className="space-y-3 font-semibold mb-10">
              <div className="flex justify-between pt-3 text-black">
                <span>Price</span>
                <span>$5464</span>
              </div>
              <div className="flex justify-between pt-3 ">
                <span>Disccount</span>
                <span className="text-green-600">-$2131</span>
              </div>
              <div className="flex justify-between pt-3">
                <span>Delivery Charge</span>
                <span className="text-green-600">Free</span>
              </div>
              <div className="flex justify-between pt-3  font-bold">
                <span>Total Amount</span>
                <span className="text-green-600">$1233</span>
              </div>
            </div>
            <Button
                  color="secondary"
                  variant="contained " className="w-full mt-5"
                  sx={{ px: "2.5rem", py: ".7rem", bgcolor: "#9155fd" }}
                >
                  Checkout
                </Button>
          </div>
        </div>

      </div>
    </div>

    </div>
  )
}

export default OrderSummary
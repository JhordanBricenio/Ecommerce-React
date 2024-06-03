import { Grid } from "@mui/material";
import dama from "../../../assets/images/dama.jpg";
import AdjustIcon from "@mui/icons-material/Adjust";

const OrderCard = () => {
  return (
    <div className="p-5 shadow-lg  hover:shadow-2xl mt-10">
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div className="flex cursor-pointer ">
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src={dama}
              alt=""
            />
            <div className="ml-5 space-y-2">
              <p className="">Men Slim Rise Black Jeans</p>
              <p className="opacity-50 text-xs font-semibold">Size: M</p>
              <p className="opacity-50 text-xs font-semibold">Color: Black</p>
            </div>
          </div>
        </Grid>

        <Grid item xs={2}>
          <p>$5355</p>
        </Grid>
        <Grid item xs={4}>
          {true && (
            <div>
              <p>
                <AdjustIcon
                  sx={{ width: "15px", height: "15px" }}
                  className="text-green-500 mr-2 text-sm"
                />
                <span>Delivered On March 03</span>
                
              </p>
              <p><span className="text-xs">Your Item Has been Delivered</span></p>
            </div>
          )}
          {false && (
            <p>
              <span>Expected Delivery On Mar 03</span>
            </p>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;

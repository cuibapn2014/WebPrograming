import { useEffect } from "react";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import ButtonWrapper from "../ButtonWrapper";

// This values are the props in the UI
// const amount = "5";
const currency = "USD";

export default function Paypal() {
  return (
    <div style={{ maxWidth: "750px", minHeight: "200px" }}>
      <PayPalScriptProvider
        options={{
          "client-id":
            "AV8VmmTzbrChSpu6x-HJ_wkDuY8oA9KExgf8SKoLhv8hReZ3xGAu64vSMIHfrzE0bwItqh0C3CUq9wvc",
          components: "buttons",
          currency: "USD",
        }}
      >
        <ButtonWrapper currency={currency} showSpinner={false} />
      </PayPalScriptProvider>
    </div>
  );
}

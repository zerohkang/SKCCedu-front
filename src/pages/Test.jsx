import AppStateProvider from "../providers/AppStateProvider";
import Checkout from "../components/Checkout";

export default function Main() {
    return (
        <AppStateProvider>
        <div>Checkout</div>
        <div className='container'>
        <Checkout />
        </div>
        </AppStateProvider>
    );
  }

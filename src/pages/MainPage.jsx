import Header from "../components/Header";
import Prototypes from "../components/Prototypes";
import Orders from "../components/Orders";
import Footer from "../components/Footer";
import AppStateProvider from "../providers/AppStateProvider";

export default function Main() {
    return (
        <AppStateProvider>
        <Header />
        <div className='container'>
        <Prototypes />
        <Orders />
        <Footer />
        </div>
        </AppStateProvider>
    );
  }




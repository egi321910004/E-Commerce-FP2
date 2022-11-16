import CartTable from "../components/CartTable";
import Header from "../components/Navbar/Header";
import SectionHeader from "../components/SectionHeader";


const CartPage = () => {
    return (
        <div>
            <Header />
            <SectionHeader />
            <CartTable
            />
        </div>
    );
};

export default CartPage;
import Navbar from "../components/Navbar";
import TableRekap from "../components/TableRekap";

const Rekap = () => {
    return (
        <>
            <Navbar />
            <TableRekap
                headers={["", "Products", "Price", "Sold", "Total"]}
            />
        </>
    );
};

export default Rekap;
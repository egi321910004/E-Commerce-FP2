import Navbar from "../components/Navbar";
import TableRekap from "../components/TableRekap";

const RekapPenjualan = () => {
    return (
        <>
            <Navbar />
            <TableRekap
                headers={["", "Products", "Price", "Sold", "Total"]}
            />
        </>
    );
};

export default RekapPenjualan;
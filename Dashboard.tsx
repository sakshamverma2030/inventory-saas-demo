import { useEffect, useState } from "react";

export default function Dashboard() {
  const [productsCount, setProductsCount] = useState(0);
  const [stockTotal, setStockTotal] = useState(0);

  useEffect(() => {
    const products = localStorage.getItem("products");
    if (products) {
      const parsed = JSON.parse(products);
      setProductsCount(parsed.length);
    }

    const stock = localStorage.getItem("stock");
    if (stock) {
      const parsed = JSON.parse(stock);
      const totalQty = parsed.reduce((sum: number, s: any) => sum + Number(s.qty), 0);
      setStockTotal(totalQty);
    }
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">📊 Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-blue-100 p-6 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-lg font-semibold text-blue-800">Products</h2>
          <p className="text-3xl font-bold text-blue-900">{productsCount} total</p>
        </div>
        <div className="bg-green-100 p-6 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-lg font-semibold text-green-800">Stock</h2>
          <p className="text-3xl font-bold text-green-900">{stockTotal} units</p>
        </div>
      </div>
    </div>
  );
}

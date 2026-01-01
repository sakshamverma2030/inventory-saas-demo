import { useState, useEffect } from "react";
import toast from "react-hot-toast";

export default function Stock() {
  const [stock, setStock] = useState<any[]>([]);
  const [product, setProduct] = useState("");
  const [qty, setQty] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("stock");
    if (saved) setStock(JSON.parse(saved));
  }, []);

  const addStock = () => {
    if (!product || !qty) {
      toast.error("Please fill all fields!");
      return;
    }
    const newStock = { product, qty };
    const updated = [...stock, newStock];
    setStock(updated);
    localStorage.setItem("stock", JSON.stringify(updated));
    setProduct(""); setQty("");
    toast.success("Stock added successfully!");
  };

  const deleteStock = (index: number) => {
    const updated = stock.filter((_, i) => i !== index);
    setStock(updated);
    localStorage.setItem("stock", JSON.stringify(updated));
    toast.error("Stock deleted!");
  };

  return (
    <div>
      <h1>Stock 📦</h1>
      <input
        placeholder="Product"
        value={product}
        onChange={e => setProduct(e.target.value)}
        className="border px-2 py-1 m-1"
      />
      <input
        placeholder="Quantity"
        value={qty}
        onChange={e => setQty(e.target.value)}
        className="border px-2 py-1 m-1"
      />
      <button
        onClick={addStock}
        className="bg-blue-600 text-white px-3 py-1 rounded m-1 hover:bg-blue-800"
      >
        Add Stock
      </button>

      <table className="table-auto border-collapse border border-gray-300 mt-4 w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2">Product</th>
            <th className="border px-4 py-2">Qty</th>
            <th className="border px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {stock.map((s, i) => (
            <tr key={i} className="hover:bg-gray-50">
              <td className="border px-4 py-2">{s.product}</td>
              <td className="border px-4 py-2">{s.qty}</td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => deleteStock(i)}
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

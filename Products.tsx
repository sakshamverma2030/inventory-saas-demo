import { useState, useEffect } from "react";
import toast from "react-hot-toast";

export default function Products() {
  const [products, setProducts] = useState<any[]>([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [qty, setQty] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("products");
    if (saved) setProducts(JSON.parse(saved));
  }, []);

  const addProduct = () => {
    if (!name || !price || !qty) {
      toast.error("Please fill all fields!");
      return;
    }
    const newProduct = { name, price, qty };
    const updated = [...products, newProduct];
    setProducts(updated);
    localStorage.setItem("products", JSON.stringify(updated));
    setName(""); setPrice(""); setQty("");
    toast.success("Product added successfully!");
  };

  const deleteProduct = (index: number) => {
    const updated = products.filter((_, i) => i !== index);
    setProducts(updated);
    localStorage.setItem("products", JSON.stringify(updated));
    toast.error("Product deleted!");
  };

  return (
    <div>
      <h1>Products 🛒</h1>
      <input
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
        className="border px-2 py-1 m-1"
      />
      <input
        placeholder="Price"
        value={price}
        onChange={e => setPrice(e.target.value)}
        className="border px-2 py-1 m-1"
      />
      <input
        placeholder="Quantity"
        value={qty}
        onChange={e => setQty(e.target.value)}
        className="border px-2 py-1 m-1"
      />
      <button
        onClick={addProduct}
        className="bg-blue-600 text-white px-3 py-1 rounded m-1 hover:bg-blue-800"
      >
        Add Product
      </button>

      <table className="table-auto border-collapse border border-gray-300 mt-4 w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Price</th>
            <th className="border px-4 py-2">Qty</th>
            <th className="border px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p, i) => (
            <tr key={i} className="hover:bg-gray-50">
              <td className="border px-4 py-2">{p.name}</td>
              <td className="border px-4 py-2">{p.price}</td>
              <td className="border px-4 py-2">{p.qty}</td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => deleteProduct(i)}
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

import productData from "../../db.json";

function Product() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {productData.products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow-lg">
            <img
              src={product.image}
              alt={product.productName}
              className="w-full h-48 object-cover rounded-md"
            />
            <h2 className="text-lg font-bold mt-2">{product.productName}</h2>
            <p className="text-gray-600 mt-1">{product.description}</p>
            <p className="text-green-600 font-bold mt-2">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;

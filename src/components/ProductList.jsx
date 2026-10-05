import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";

const products = [
  {
    id: 1,
    name: "Snake Plant",
    price: 25,
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "Aloe Vera",
    price: 20,
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1596547609652-9cf5d8b5f9b6?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "Peace Lily",
    price: 30,
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1593482892290-f54927ae2b8c?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    name: "Spider Plant",
    price: 18,
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    name: "Golden Pothos",
    price: 22,
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    name: "ZZ Plant",
    price: 28,
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1632207691144-9e9b3d0e8b4a?auto=format&fit=crop&w=600&q=80",
  },

  {
    id: 7,
    name: "Rose",
    price: 15,
    category: "Flowering Plants",
    image:
      "https://images.unsplash.com/photo-1496062031456-07b8f162a322?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 8,
    name: "Jasmine",
    price: 17,
    category: "Flowering Plants",
    image:
      "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 9,
    name: "Marigold",
    price: 12,
    category: "Flowering Plants",
    image:
      "https://images.unsplash.com/photo-1599685315640-6c1e8c9a0f4d?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 10,
    name: "Hibiscus",
    price: 20,
    category: "Flowering Plants",
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 11,
    name: "Lavender",
    price: 24,
    category: "Flowering Plants",
    image:
      "https://images.unsplash.com/photo-1499002238440-d264edd596ec?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 12,
    name: "Sunflower",
    price: 14,
    category: "Flowering Plants",
    image:
      "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=600&q=80",
  },

  {
    id: 13,
    name: "Basil",
    price: 10,
    category: "Aromatic Plants",
    image:
      "https://images.unsplash.com/photo-1618375569909-3c8616cf7733?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 14,
    name: "Mint",
    price: 9,
    category: "Aromatic Plants",
    image:
      "https://images.unsplash.com/photo-1628431297960-8b7c4b7c4c1c?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 15,
    name: "Rosemary",
    price: 13,
    category: "Aromatic Plants",
    image:
      "https://images.unsplash.com/photo-1515586000433-45406d8e6662?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 16,
    name: "Thyme",
    price: 11,
    category: "Aromatic Plants",
    image:
      "https://images.unsplash.com/photo-1592419044706-39796d40f98c?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 17,
    name: "Oregano",
    price: 12,
    category: "Aromatic Plants",
    image:
      "https://images.unsplash.com/photo-1596547609652-9cf5d8b5f9b6?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 18,
    name: "Coriander",
    price: 8,
    category: "Aromatic Plants",
    image:
      "https://images.unsplash.com/photo-1589927986089-35812388d1f4?auto=format&fit=crop&w=600&q=80",
  },
];

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const categories = [
    "Indoor Plants",
    "Flowering Plants",
    "Aromatic Plants",
  ];

  const isInCart = (id) => {
    return cartItems.some((item) => item.id === id);
  };

  return (
    <div className="products-page">
      <h1>Paradise Nursery Plants</h1>

      {categories.map((category) => {
        const categoryProducts = products.filter(
          (product) => product.category === category
        );

        return (
          <section
            className="category-section"
            key={category}
          >
            <h2>{category}</h2>

            <div className="product-grid">
              {categoryProducts.map((product) => (
                <div
                  className="product-card"
                  key={product.id}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                  />

                  <h3>{product.name}</h3>

                  <p className="price">
                    ${product.price}
                  </p>

                  <button
                    className="add-btn"
                    disabled={isInCart(product.id)}
                    onClick={() =>
                      dispatch(addItem(product))
                    }
                  >
                    {isInCart(product.id)
                      ? "Added to Cart"
                      : "Add to Cart"}
                  </button>
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}

export default ProductList;
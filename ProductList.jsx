import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';

const plants = {
  Indoor: [
    { id: 1, name: 'Aloe Vera', price: 200, image: 'https://via.placeholder.com/100' },
    { id: 2, name: 'Snake Plant', price: 300, image: 'https://via.placeholder.com/100' },
    { id: 3, name: 'Peace Lily', price: 250, image: 'https://via.placeholder.com/100' },
    { id: 4, name: 'Spider Plant', price: 180, image: 'https://via.placeholder.com/100' },
    { id: 5, name: 'ZZ Plant', price: 400, image: 'https://via.placeholder.com/100' },
    { id: 6, name: 'Pothos', price: 220, image: 'https://via.placeholder.com/100' }
  ],
  Outdoor: [
    { id: 7, name: 'Rose', price: 150, image: 'https://via.placeholder.com/100' },
    { id: 8, name: 'Hibiscus', price: 200, image: 'https://via.placeholder.com/100' },
    { id: 9, name: 'Tulsi', price: 100, image: 'https://via.placeholder.com/100' },
    { id: 10, name: 'Jasmine', price: 180, image: 'https://via.placeholder.com/100' },
    { id: 11, name: 'Sunflower', price: 120, image: 'https://via.placeholder.com/100' },
    { id: 12, name: 'Lavender', price: 300, image: 'https://via.placeholder.com/100' }
  ],
  Medicinal: [
    { id: 13, name: 'Neem', price: 250, image: 'https://via.placeholder.com/100' },
    { id: 14, name: 'Amla', price: 200, image: 'https://via.placeholder.com/100' },
    { id: 15, name: 'Mint', price: 80, image: 'https://via.placeholder.com/100' },
    { id: 16, name: 'Basil', price: 120, image: 'https://via.placeholder.com/100' },
    { id: 17, name: 'Ashwagandha', price: 350, image: 'https://via.placeholder.com/100' },
    { id: 18, name: 'Giloy', price: 280, image: 'https://via.placeholder.com/100' }
  ]
};

const ProductList = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  const isInCart = id => cart.some(item => item.id === id);

  return (
    <div>
      <h2>Plant Categories</h2>

      {Object.keys(plants).map(category => (
        <div key={category}>
          <h3>{category}</h3>
          {plants[category].map(plant => (
            <div key={plant.id}>
              <img src={plant.image} alt={plant.name} />
              <h4>{plant.name}</h4>
              <p>₹{plant.price}</p>
              <button
                disabled={isInCart(plant.id)}
                onClick={() => dispatch(addItem(plant))}
              >
                {isInCart(plant.id) ? 'Added' : 'Add to Cart'}
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ProductList;

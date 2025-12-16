import { useDispatch } from 'react-redux';
import { addItem } from '../redux/CartSlice';

const plants = [
  { id: 1, name: 'Aloe Vera', price: 200, category: 'Indoor' },
  { id: 2, name: 'Snake Plant', price: 300, category: 'Indoor' },
  // add minimum 18 plants
];

const ProductList = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Plants</h2>
      {plants.map(p => (
        <div key={p.id}>
          <h4>{p.name}</h4>
          <p>₹{p.price}</p>
          <button onClick={() => dispatch(addItem(p))}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

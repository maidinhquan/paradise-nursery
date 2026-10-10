import { useDispatch, useSelector } from 'react-redux';
import { addItem, selectCartItems } from './CartSlice';
import { plants } from './plants';
const categories = [...new Set(plants.map((plant) => plant.category))];
const dollars = (value) => `$${value.toFixed(2)}`;

export default function ProductList() {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const addedIds = new Set(items.map((item) => item.id));
  return (
    <main className="container catalog-page">
      <div className="page-heading"><p className="eyebrow">The plant collection</p><h1>Find your next favorite green friend.</h1><p>Explore 18 unique houseplants in three curated categories.</p></div>
      {categories.map((category) => (
        <section className="category-section" key={category} aria-label={category}>
          <div className="section-heading"><h2>{category}</h2><span>6 plants</span></div>
          <div className="product-grid">
            {plants.filter((plant) => plant.category === category).map((plant) => {
              const added = addedIds.has(plant.id);
              return (
                <article className="product-card" key={plant.id}>
                  <div className="product-image-wrap"><img src={plant.image} alt={plant.name} loading="lazy" onError={(event) => { event.currentTarget.src = '/images/plant-placeholder.svg'; }} /></div>
                  <div className="product-content"><h3>{plant.name}</h3><p>{plant.description}</p><div className="product-footer"><strong>{dollars(plant.price)}</strong><button type="button" className="button button-primary" disabled={added} onClick={() => dispatch(addItem(plant))}>{added ? 'Added to Cart' : 'Add to Cart'}</button></div></div>
                </article>
              );
            })}
          </div>
        </section>
      ))}
    </main>
  );
}

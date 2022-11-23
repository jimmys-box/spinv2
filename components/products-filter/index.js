import { useState } from 'react';
import Checkbox from './form-builder/checkbox';
import CheckboxColor from './form-builder/checkbox-color';
import CheckboxTags from './form-builder/checkbox-tags';
import Slider from 'rc-slider';





const ProductsFilter = () => {
  const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const addQueryParams = () => {
    // query params changes
  }

  return (
    <form className="products-filter" onChange={addQueryParams}>
      <button type="button" 
        onClick={() => setFiltersOpen(!filtersOpen)} 
        className={`products-filter__menu-btn ${filtersOpen ? 'products-filter__menu-btn--active' : ''}`}>
          <div className='productFilterSearch'>
          <h3>Filtres</h3>
          <i className="icon-down-open"></i>
          </div>
           
      </button>
      
      <div className={`products-filter__wrapper ${filtersOpen ? 'products-filter__wrapper--open' : ''}`}>
        <div className='productBck'>
        <div className="products-filter__block dFlexPhoneSm">
          <button type="button">Type</button>
          <div className="products-filter__block__content dFlex">
            {productsTypes.map(type => (
              <Checkbox 
                key={type.id} 
                name="product-type" 
                label={type.name} 
              />
            ))}
          </div>
        </div>

        <div className="products-filter__block">
          <div className="products-filter__block__content">
            <div className="checkbox-tags-wrapper">
              {productsTags.map(type => (
                <CheckboxTags key={type.id} valueName={type.name}  name={type.name} />
              ))}
            </div>
          </div>
        </div>

        <div className="products-filter__block">
          <button type="button">Prix</button>
          <div className="products-filter__block__content">
            <Range min={0} max={100} defaultValue={[3, 10]}  trackStyle={[{ backgroundColor: 'red' }, { backgroundColor: 'white' }]}
        handleStyle={[{ backgroundColor: 'gray' }, { backgroundColor: 'gray' }]} tipFormatter={value => `${value}€`} />
          </div>
        </div>
                
        <div className="products-filter__block dFlexPhoneSm">
          <button type="button">Jeux</button>
          <div className="products-filter__block__content dFlexPhone flexWrap">
            {productsGames.map(type => (
              <Checkbox 
 
                key={type.id} 
                name="product-games" 
                label={type.label} />
            ))}
          </div>
        </div>
              
        <div className="products-filter__block dFlexPhoneSm">
          <button type="button">Marques</button>
          <div className="products-filter__block__content dFlexPhone flexWrap">
            {productsBrands.map(type => (
              <Checkbox 
 
                key={type.id} 
                name="product-brands" 
                label={type.label} />
            ))}
          </div>
        </div>

        <div className="products-filter__block">
          <div className="products-filter__block__content dFlexPhoneSm">
            {productsFilters.map(type => (
              <Checkbox 
 
                key={type.id} 
                name="product-filters" 
                label={type.name} />
            ))}
          </div>
        </div>

        <div className="products-filter__block dFlexPhoneSm">
          <button type="button">Popularité</button>
          <div className="products-filter__block__content dFlexPhone flexWrap">
            {productsPopularity.map(type => (
              <Checkbox 
 
                key={type.id} 
                name="product-popularity" 
                label={type.name} />
            ))}
          </div>
        </div>
        
        <div className="products-filter__block">
          <button type="button">Couleur</button>
          <div className="products-filter__block__content">
            <div className="checkbox-color-wrapper">
              {productsColors.map(type => (
                <CheckboxColor key={type.id} valueName={type.color} name="product-color" color={type.color} />
              ))}
            </div>
          </div>
        </div>
        <div className='filterAreaButtons'>
        <button  onClick={() => setFiltersOpen(!filtersOpen)}  className="btn btn-submit btn--rounded btn--yellow">Annuler</button>
        <button type="submit" className="btn btn-submit btn--rounded btn--yellow">Filtrer</button>
        </div>
      </div>
      </div>
    </form>
  )
}
  
export default ProductsFilter
  
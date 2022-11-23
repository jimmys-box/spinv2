import Parser from 'html-react-parser';


const Description = ({ show, description, short_description }) => {
  const style = {
    display: show ? 'flex' : 'none',
  }

  return (
    <section style={style} className="product-single__description">
      <div className="product-description-block">
        <div className="product-description-block">
          <img width="50" src="/images/logos/logo-spintop-black.png" />
          {description &&
            <h4> {Parser(description)}</h4>
          }
          {!description &&
            <h4> {Parser(short_description)}</h4>
          }
         

        </div>
      </div>
      {/* <div className="product-description-block">
     
        <h4>Détails</h4>
        <div className="dFlex" style={{justifyContent:'center'}}>
          <div style={{width:'40%'}}>
          <p>Poids: </p>
          </div>
          <p>{poids}</p>
        </div>
        <div className="dFlex" style={{justifyContent:'center'}}>
        <div style={{width:'40%'}}>
          <p>Dimensions: </p>
          </div>
          <p>{dimensions}</p> 
        </div>

      </div> */}
    </section>
  );
};

export default Description;

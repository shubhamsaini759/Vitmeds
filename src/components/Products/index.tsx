
import clavunent from '../../assets/Items/clavunent.png'

const Products = () => {
    return (
        <section id='products' className='certification'>
            <div  data-aos='fade-up'>
                <div className='section-title'>
                    <h2>Products</h2>
                </div>
                <div className='ItemContainer' >

                <div className='cardBox'>
                    <div className='imgBox' >
                        <img
                        data-aos="fade-right"
                        src={clavunent}
                        height={300}
                        alt="Norway"
                        />
                    </div>
                    <div className='cardDetails'>
                        <p data-aos="fade-left"  className='cardHeading' >clavunent-625</p>
                        <p data-aos="fade-left" className='cardDescription'>Amoxycillin & Potassium Clavulanate Tabkets I.P.</p>
                        <p data-aos="fade-left"  className='pros' >
                        Drug labeling serves crucial roles in identifying the active ingredients and excipients of a drug and providing guidance to ensure patient safety and appropriate medication administration.
                        </p>
                    </div>
                </div>

                </div>
            </div>
        </section>
    );
};

export default Products;

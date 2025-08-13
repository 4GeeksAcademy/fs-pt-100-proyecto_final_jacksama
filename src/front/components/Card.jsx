import '../CSS/Card.css';

export const Card = () => {
    return (
        <div className="card">
            <p className="card-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor incidunt praesentium quam, quasi tempora sit sed blanditiis nemo ab odit non assumenda. Nam sed natus maiores error corrupti placeat unde.</p>
            <div className='container-card'>
                <h5 className="card-autor">Autor</h5>
                <p className="card-genero">Genero</p>
            </div>
        </div>
    );
};

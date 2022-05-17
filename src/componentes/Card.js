import React from 'react';

const Card = (props) => {
const {src,title,type} = props
    return (
        <div>
            <div className="card mb-3" style={{width:"28rem"}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={src} className="img-fluid rounded-start mt-3" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{type}</p>
                            <p className="card-text"><small className="text-muted">hola</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;

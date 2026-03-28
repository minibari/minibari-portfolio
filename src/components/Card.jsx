

export default function Card(props) {

    return (
        <div className="card" style={{width: "18rem"}}>
            <img src={props.img} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <a href={props.link} className="btn btn-primary">LINK</a>
            </div>
        </div>
    );

}
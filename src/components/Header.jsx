import Tabs from './Tabs'
import githubImg from '../assets/img/githubicon.svg'
import meImg from '../assets/img/me.avif'



export default function Header() {


    return (
        <header>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-4">
                        <p>
                            <img src={meImg} className="img-fluid rounded-circle" alt="HeyItsMeMario" style={{ height: "200px", width: "200px" }} />
                        </p>
                        <h4>Ales Baranek</h4>
                        <p>Github <a href="https://github.com/minibari"><img src={githubImg} alt="GitHub" style={{ height: "25px" }} /></a></p>
                    </div>
                    <div className="col-md-6">
                        <Tabs />
                    </div>
                </div>
            </div>
        </header>
    );

}
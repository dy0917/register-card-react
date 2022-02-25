
import BackNav from "../Components/Nav/BackNav";

function Menu() {

    return (
        <div>
            <BackNav></BackNav>
            <div className="container">
                <div className="row">
                    <div className='col-4 offset-md-4'>
                        <div className="col  mb-5">This is menu content</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu;
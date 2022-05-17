import React,{useState} from 'react';

const Navbar = (props) => {
    const [inputValue, setInputValue] = useState('')
    
    const {setData} = props

    const busqueda = (e)=>{
        e.preventDefault()
        const url = `https://pokeapi.co/api/v2/pokemon/${inputValue}/`
        fetch(url)
        .then((resp)=>resp.json())
        .then((data)=> {
            setData(data)
            // console.log(data)
            console.log(inputValue)
        });
    }
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <form onSubmit={(e)=> busqueda(e)} className="d-flex">
                        <input onChange={(e)=>{
                            setInputValue(e.target.value)
                        }} 
                            className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;

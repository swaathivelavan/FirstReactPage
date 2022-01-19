

import reactlogo from './react-logo.png'

function Header(){

    return(
        <header >
        <nav className="nav">
    <img src={reactlogo} alt="hello" width="100px"/>
    <h4>AboutReact</h4>
    <h4 className='left'>React First Project</h4>
    </nav>
    </header>
    )

}
export default Header
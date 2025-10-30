import './header.css'
import { Link } from 'react-router-dom';

function Header(){
    return(
        <header class='quizEnglish'>
        <h2>English Quiz</h2>
        <div className='bar'></div>

        <nav class='menu'>
            <Link to='./'><box-icon name='home' type='solid' color='#d8a15b' ></box-icon> Home</Link>
        </nav>
    </header>
    )
}

export default Header;
import './header.css'
import { Link } from 'react-router-dom';

function Header(){
    return(
        <header class='quizEnglish'>
        <h2>English Quiz</h2>

        <nav class='menu'>
            <Link to='./'>Home</Link>
        </nav>
    </header>
    )
}

export default Header;
import React, { ReactNode } from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';

type NavbarProps = {
children: ReactNode;
}

const Header = ({children} : NavbarProps ) =>{
return(
<header className="flex justify-center flex-wrap bg-gray-900 w-full h-64">
    <div>
        <Router>
        <Link to="/home">
        <div>
            <p className="font-sans font-bold text-4xl text-white text-center pt-5">
                Movies!
            </p>
        </div>
        </Link>
        </Router>
        <div className="mb-1">
            <h1 className="text-white text-xl">Search your favorite movies here</h1>
        </div>
        <div className="mt-4">
            {children}
        </div>
    </div>
</header>
)
}

export default Header
import React, { ReactNode } from 'react';

type NavbarProps = {
children: ReactNode;
}

export const Header = ({children} : NavbarProps ) =>{
return(
<header className="flex justify-center flex-wrap bg-gray-900 w-full h-64">
    <div>
        <div>
            <p className="font-sans font-bold text-4xl text-white text-center pt-5">
                Movies!
            </p>
        </div>
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
import React, { ReactNode } from 'react';

type NavbarProps = {
    children: ReactNode;
}

export const Header = ({children} : NavbarProps ) =>{
return(
<div>
    <div>
        <p className="font-sans font-bold text-4xl text-white text-center pt-5">
            Movies!
        </p>
    </div>
    <div className="mt-4">
        {children}
    </div>
</div>
)
}
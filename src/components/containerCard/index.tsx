import React, { ReactNode } from 'react';

type ContainerProps = {
    children: ReactNode;
}

export const ContainerCard = ({children} : ContainerProps ) =>{
return(
<div className="flex justify-center">
    <div className=" -mt-8 p-3 flex flex-wrap justify-between rounded-md shadow-2xl bg-gray-200 w-3/4 h-auto">
        {children}
    </div>
</div>
)
}
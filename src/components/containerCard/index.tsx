import React, { ReactNode } from 'react';
import { ContentStatus } from './../contentStatus/index';

type ContainerProps = {
children: ReactNode;
}

export const ContainerCard = ({children} : ContainerProps ) =>{
return(
<div className="-mt-16">
        <ContentStatus />
        <div className="flex justify-center">
            <div className="p-3 flex flex-wrap justify-between rounded-sm shadow-2xl bg-gray-200 w-3/4 h-auto">
                {children}
            </div>
        </div>
</div>
)
}
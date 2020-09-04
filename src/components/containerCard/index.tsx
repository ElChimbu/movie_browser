import React, { ReactNode } from 'react';
import { ContentStatus } from './../contentStatus/index';

type IContainer = {
children: ReactNode;
}

const ContainerCard = ({children} : IContainer ) =>{
return(
    <div className="-mt-16">
        <ContentStatus />
        <div className="flex justify-center">
            <div className="p-3 flex justify-center flex-wrap rounded-sm shadow-2xl bg-gray-200 w-3/4 h-auto">
                {children}
            </div>
        </div>
    </div>
)
}

export default ContainerCard
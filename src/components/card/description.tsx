import React from 'react';
import { Img } from './index';

export const MovieFile = () =>{
return(
<article className="flex justify-center flex-wrap p-6">
    <div className="flex flex-col">
        <header className="text-center text-lg mb-2 bg-gray-300">
            <h1>
                THE LASAGNA GUY
            </h1>
        </header>
        <Img src="https://placekitten.com/230/330" />
    </div>
    <div className="w-8/12 p-8 flex-grow align-middle text-justify">
        <p className="text-lg font-semibold mb-2">
            Sinopsis:
        </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse mollis neque et orci tristique vestibulum.
            Fusce eu mauris sit amet magna ultrices vulputate.
            Integer pellentesque nec sapien eget porta.
            Pellentesque mattis arcu nisi, at ornare diam mollis in.
            Donec sed magna elementum, dignissim libero eget, semper diam. In suscipit interdum ex in finibus.
            Curabitur tincidunt nibh id leo mollis tempus. Curabitur non nibh nec mauris tincidunt placerat sit amet
            vestibulum eros. Fusce at nulla nisl. Maecenas a varius mauris, id consectetur sapien. Proin faucibus
            turpis ac eros pretium, vitae cursus quam vestibulum. Integer lobortis orci urna, a luctus risus
            dignissim eu.
        </p>
        <p className="text-sm font-semibold mt-4"> 
            Directed by: <span>John</span>
        </p>
    </div>
</article>
)
}
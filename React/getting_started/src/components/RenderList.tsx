import React, { FC } from 'React';

const array: any[] = ['green']

const RenderList: FC = () => {
    return (
        <>
        {array.map(item=> 
            <h1>{item}</h1>
        )}
        </>
    )
}
export default RenderList;
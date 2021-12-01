import React from 'react';
import {BsFillArrowRightCircleFill} from 'react-icons/bs';
import {Button} from 'react-bootstrap';

const Next = ({nextPage}) => {
    return (
        <div className="next">
                <Button href="/next" >
                    <BsFillArrowRightCircleFill size="30px"/>
                </Button>
        </div>
    )
}

export default Next

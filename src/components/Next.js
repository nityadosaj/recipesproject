import React, {useState, useEffect} from 'react';
import {Container, Pagination, PageItem} from 'react-bootstrap';

//not yet implemented
//Would have shown the next 20 recipes in the array

const Next = ({nextPage}) => {
    const [offset, setOffset] = useState(0);
    const [perPage] = useState(20);
    const [pageCount, setPageCount] = useState(0);

    useEffect(()=>{
        const data = JSON.parse(localStorage.getItem("recipe"));
        setPageCount(Math.ceil(data.count/perPage));

    });

    const handlePageClick = (e)=>{
        const selectedPage = e.selected;
        setOffset((selectedPage+1)*perPage);
    }
    return (
        <Container>
            <Pagination>
                <PageItem href={nextPage}>{2}</PageItem>
            </Pagination>
        </Container>
    )
}

export default Next;

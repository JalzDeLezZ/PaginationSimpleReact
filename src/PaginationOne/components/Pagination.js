import React from 'react'

const Pagination = (props) => {

    const {postsPerPage, totalPosts, mpaginate} = props

    const pageNumber= [];

    for(let i = 1; i<= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumber.push(i)
    }
    // const mPaginate = (pageNumber) => setcurrentPage(pageNumber);

  return (
    <div>
            <ul>
                {pageNumber.map(number => (
                    <li key={number}>
                        <a onClick={() => mpaginate(number)} href="!#">{number}</a>
                    </li>
                ))
                }
            </ul>
    </div>
  )
}

export default Pagination
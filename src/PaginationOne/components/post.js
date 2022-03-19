import React from 'react'

const CPost = ({aTrozo, loading}) => {
    if (loading) {
        return <h2>PLoading</h2>
    }
  return (
        <ul>
            {
                aTrozo.map(pI => (
                    <li key ={pI.id}>
                        {pI.title}
                    </li>
            ))}
        </ul>
  );
};

export default CPost
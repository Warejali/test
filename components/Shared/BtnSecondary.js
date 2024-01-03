import React from 'react';

const BtnSecondary = ({children}) => {
    return (
        <div>
            <button className="btn btn-secondary">{children}</button>
        </div>
    );
};

export default BtnSecondary;
import React from 'react';

const BtnPrimary = ({ children }) => {
    return (
        <div>
            <button className="btn btn-primary">{children}</button>
        </div>
    );
};

export default BtnPrimary;
import React from 'react';

const Div = ({className, children,aos}) => {
    return (
        <div className={`${className}`} data-aos={aos? aos : null}>
            {children}
        </div>
    );
};

export default Div;
import React from 'react';

const Heading = ({className, children,aos}) => {
    return (
        <h1 className={`${className}`} data-aos={aos? aos : null}>
            {children}
        </h1>
    );
};

export default Heading;
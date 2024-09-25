import React from 'react';

const Paragraph = ({className, children,aos}) => {
    return (
        <p className={`${className}`} data-aos={aos? aos : null}>
            {children}
        </p>
    );
};

export default Paragraph;
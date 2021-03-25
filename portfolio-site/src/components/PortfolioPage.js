import React from 'react';

const PortfolioPage = (props) => (
    <div>
        This is my work {props.match.params.id}
    </div>
);

export default PortfolioPage;
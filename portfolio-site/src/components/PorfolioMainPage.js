import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioMainpage = () => (
    <div>
        Here are my portfolios
        <Link to="portfolio/1">My work 1</Link>
        <Link to="portfolio/2">My work 2</Link>
    </div>
);

export default PortfolioMainpage;
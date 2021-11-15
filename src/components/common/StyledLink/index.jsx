import { Link } from 'react-router-dom';

import { FiChevronRight } from 'react-icons/fi';

import './StyledLink.scss';

const StyledLink = ({ to, children, classes = '', ...rest }) => {
    return (
        <Link to={to} className={`link-container ${classes}`} {...rest}>
            {children} <FiChevronRight size={'1rem'} />
        </Link>
    );
};

export default StyledLink;

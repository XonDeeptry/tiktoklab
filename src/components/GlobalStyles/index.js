// Logic library import
import PropTypes from 'prop-types';
// Layout library import

// Layout import
import './GlobalStyles.scss';

// Component import

function GlobalStyles({ children }) {
    return children;
}

GlobalStyles.propTypes = {
    children: PropTypes.node.isRequired,
};

export default GlobalStyles;

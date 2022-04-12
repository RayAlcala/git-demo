const Wrapper = props => {
    return props.children;
};

export default Wrapper;

// wrapper is created to satisfy the limitations of JSX
// that requires only one root element that you return or store in a constant or variable 
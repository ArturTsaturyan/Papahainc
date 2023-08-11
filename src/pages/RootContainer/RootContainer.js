import {
    BrowserRouter as Router,
    Route,
    Routes
}
    from 'react-router-dom'

import Home from '../Home/Home';

const RootContainer = () => {
    return (
        <Router>
            <Routes >
                <Route path={'/'} element={<Home />} />
                {/* <Route path={'/*'} element={<Error />} /> */}
            </Routes>
        </Router >
    );
}

export default RootContainer;

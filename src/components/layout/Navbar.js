import React from 'react';
import {Link} from "react-router-dom";
import SignedInLinks from "./SignedInLInks";
import SignedOutLinks from "./SignedOutLinks";


const Navbar = () => {
    return (
        <nav className="nav-wrapper green darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">
                    Project Planning
                </Link>
                <SignedInLinks />
                <SignedOutLinks />
            </div>
        </nav>
    );
};

export default Navbar;
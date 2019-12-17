import React from 'react';
import {
    Link
  } from 'react-router-dom';
import { MyContext } from '../StateComponents/MyProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavHeader.scss';

class NavHeader extends React.Component {
    static contextType = MyContext;
    render() {
        return (
                <div>
                    <nav>
                        <ul>  
                            <li>
                                <Link to='/'>Landing Page</Link>
                            </li>
                            {!this.context.state.token && <li>
                                <Link to='/create-account'>Create Account Page</Link>
                            </li>}
                            {this.context.state.token && <li>
                                <Link to='/task-manager'>Task Manager App Page</Link>
                            </li>}
                            {this.context.state.token && <li>
                                <Link to='/profile'>Profile Page</Link>
                            </li>}
                        </ul>
                    </nav>
                </div>
            )
    }
}


export default NavHeader;
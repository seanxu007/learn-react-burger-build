import React, { Component } from 'react';
import { connect } from 'react-redux';

import Aux from '../Aux/Aux';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandle = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerToggleHandle = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer}
        });
    }

    render () {
        return (
            <Aux>
                <Toolbar
                    isAuth={this.props.isAuthenticate}
                    drawToggleClicked={this.sideDrawerToggleHandle} />
                <SideDrawer
                    isAuth={this.props.isAuthenticate}
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandle}/>
                <main className={ classes.Content }>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticate: state.auth.token !== null
    }
}

export default connect(mapStateToProps)(Layout);
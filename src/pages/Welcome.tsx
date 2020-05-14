import * as React from 'react';
import Button from "../global-elements/Button";
import {RouteComponentProps, withRouter} from "react-router";
import UserService from "../redux/services/UserService";
import {toast} from "react-toastify";
import {TOAST_MESSAGES} from "../global";
import {connect} from "react-redux";
import {User} from "../models/User";
import AppBar from '@material-ui/core/AppBar';
import {Hidden, Grid} from "@material-ui/core";
import '../global-elements/globalStyles.scss'
import {Simulate} from "react-dom/test-utils";
import store from '../redux/store'
import {offline} from "@redux-offline/redux-offline";
import {Snack} from "../redux/reducers/snackReducer";
import {handleSnack} from "../redux/actions/snack";
import AppTabHandler from "../AppTabHandler"
import TabPageHeader from './TabPageHeader';
import PageToolbar from './PageToolbar';
import MiniMenu from '../MiniMenu';
import Tab from './Tab'
import {TAB_ONE, TAB_TWO, LOGOUT_TAB} from "../TabConstants";
import {withGlobal} from "../context/withGlobal";
import {GlobeContext} from "../context/GlobalContext";
import BuildIcon from '@material-ui/icons/Build'
import NotesIcon from '@material-ui/icons/Notes';
import StartHere from './StartHere'
import { getAuthenticatedUser } from '../redux/actions/user';

interface ReduxProps {
   offline: any
}


interface State {
    offline: any;
}

type Props = RouteComponentProps & ReduxProps

class Welcome extends React.Component<Props, State> {

    public constructor(props) {
        super(props);
    }


    public render() {



        return (
            <div className="Welcome--wrapper">
                <Grid container direction="column">
                    <Grid item style={{width: '100%', position: 'sticky', top: 0, zIndex: 3}}>
                        <h1>Welcome</h1>
                    </Grid>
                    <Grid item style={{width: '100%'}}>
                       <StartHere />
                    </Grid>
                    <Grid item style={{width: '100%'}}>
                    <Hidden smUp>
                        <PageToolbar {...this.props} />
                    </Hidden>
                    </Grid>
                </Grid>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        offline: state.offline
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleSnackFn: (snack: Snack) => {
            dispatch(handleSnack(snack));
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Welcome));

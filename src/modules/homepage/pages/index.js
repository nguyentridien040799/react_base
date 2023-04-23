import {connect} from "react-redux";

import Page from './Page';
import * as homepageActions from "../store/actions";

const mapStateToProps = state => {
    return {
        "modes": state.homepageReducer.modes
    };
}

export default connect(mapStateToProps, (dispatch) => {
    return {
        resetMode: () => {
            dispatch(homepageActions.resetMode())
        }
    }
})(Page)

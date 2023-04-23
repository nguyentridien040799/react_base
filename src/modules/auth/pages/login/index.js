import {connect} from "react-redux";
import * as homepageActions from '../../../homepage/store/actions';

import Page from './Page';

export default connect(null,(dispatch) => {
    return {
        challengeMode: () => {
            dispatch(homepageActions.challengeMode())
        }
    }
})(Page)

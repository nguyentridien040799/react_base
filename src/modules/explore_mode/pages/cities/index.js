import {connect} from "react-redux";
import * as homepageActions from '../../../homepage/store/actions';

import Page from './Page';

export default connect(null,(dispatch) => {
    return {
        exploreMode: () => {
            dispatch(homepageActions.exploreMode())
        }
    }
})(Page)

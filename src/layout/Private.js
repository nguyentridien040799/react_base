//import libs
import React from 'react'
import PropTypes from 'prop-types'

// import components
import Navigation from '../common/navigation/index'
import ScrollTop from '../common/scroll-top/index'
import Footer from '../common/footer/index'

const containerStyle = {
    paddingTop: '3.5rem',
}

const displayName = 'Private Layout'
const propTypes = {
    children: PropTypes.node.isRequired,
}

function PrivateLayout({ children }) {
    return <div style={containerStyle}>
        <Navigation/>
        <main style={{ minHeight: '100vh'}}>
            { children }
            <ScrollTop />
        </main>
        <Footer/>
    </div>
}

PrivateLayout.dispatch = displayName
PrivateLayout.propTypes = propTypes

export default PrivateLayout

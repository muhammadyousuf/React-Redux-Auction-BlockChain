import React from 'react';
import RefreshIndicator from 'material-ui/RefreshIndicator';


export const LOADING = 'loading'
export const HIDE = 'hide'

const style = {
    container: {
        position: 'fixed',
        width: '100 %',
        height: '100 %',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: '2',
    },
    refresh: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',

    },
    hide: {
        display: 'none'
    }
};

const Loader = ({ status }) => (
    <div style={status==="loading"?style.container: style.hide}>
        <RefreshIndicator
            size={120}
            left={10}
            top={0}
            status={status}
            style={style.refresh}
        />
    </div>
);

export default Loader;
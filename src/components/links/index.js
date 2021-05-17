import React from 'react';
import {Link} from 'react-router-dom'
const Links = () => {
    return(
        <div style={{ height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Link to="/buttons">Botões</Link>
        </div>
    )
}

export default Links
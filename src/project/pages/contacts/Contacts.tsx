import { green } from '@material-ui/core/colors'
import React from 'react'
import { useRouteMatch, Link } from 'react-router-dom';
import { ContactsRouter } from '../../../router/ContactsRouter'

function Contacts () {
  const match = useRouteMatch();
  const Router = ContactsRouter()
  const Links = [ "comp1", "comp2" ]
  return (
    <div className='container' style={ { display: 'flex', width: '100%' } }>
      <div className='contacts-nav' style={ { width: '20%', background: 'green' } }>
        { Links.map( link => {
          return <div>
            <Link to={`${match.url}/${link}`}>{link}</Link>
          </div>
        } ) }
      </div>
      <div className='contacts-content' style={ { width: '80%', background: 'yellow' } }>
        { Router }
      </div>
    </div>
  )
}

export default Contacts
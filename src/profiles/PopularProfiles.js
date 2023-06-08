import React from 'react'
import appStyles from '../../App.module.css'
import { Container } from 'react-bootstrap'

const PopularProfiles = () => {
  return (
    <Container className={appStyles.Content}>
        <p>most followed profiles</p>
    </Container>
  )
}

export default PopularProfiles
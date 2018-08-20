import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'antd'
import Recomponent from './recomponent'

function Puffin({ schema, ...rest }) {
  return (
    <Row {...rest}>
      {
        schema.map((item, i) => {
          const {
            components = [],
            props = {},
          } = item

          return (
            <Col key={i} {...props}>
              {
                components.map((c, j) => (
                  <Recomponent {...c} key={j} />
                ))
              }
            </Col>
          )
        })
      }
    </Row>
  )
}

Puffin.propTypes = {
  schema: PropTypes.array,
}

Puffin.defaultProps = {
  schema: [],
}

export default Puffin

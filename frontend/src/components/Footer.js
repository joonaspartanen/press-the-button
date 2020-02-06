import React from 'react'
import { Container, Menu, Icon } from 'semantic-ui-react'

const Footer = () => {
  return (
    <Menu
      fixed='bottom'
      inverted
      secondary
      style={{ backgroundColor: '#666a86' }}
    >
      <Container>
        <Menu.Item header>
          <Icon name='gavel' size='large' style={{ marginRight: '1.5em' }} />
          Press the Button
        </Menu.Item>
        <Menu.Item
          as='a'
          href='https://github.com/joonaspartanen/press-the-button'
        >
          About
        </Menu.Item>
      </Container>
    </Menu>
  )
}

export default Footer

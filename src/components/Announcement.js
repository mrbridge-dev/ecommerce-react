import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 20px;
    border: 2px solid #f1b604;
    color: black;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
`

class Announcement extends Component {
  render() {
    return (
        <Container>
            No Announcements Currently
        </Container>
    );
  }
}

export default Announcement;

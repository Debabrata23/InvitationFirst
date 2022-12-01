import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
const LandingPage = () => {
    return (
        <div className='main_bg'>
            <div className='date_div'><span>26th</span></div>
            <div className='date_div_month'><span>Feb</span></div>
            <div className='header_text'><span>Debabrata</span></div>
            <div className='header_text_sub'><span>& Pritha's</span></div>
            <span className='subtitle'>First Wedding Anniversary</span>
            <Container>
                <Row><div className='image1_div'><img  className='image1' src={require('../images/cover1.JPG')}/></div></Row>
                <Row><div className='image2_div'><img  className='image2' src={require('../images/cover3.JPG')}/></div></Row>
                <Row><div className='image3_div'><img  className='image3' src={require('../images/cover2.JPG')}/></div></Row>
                <Row><div className='address_div'><span className='subtitle_address'>Please honour us with your presence:</span></div></Row>
                <Row><div className='address_div'><span className='subtitle_timing'>(Lunch - 12:00PM onwards)</span></div></Row>
                <Row><div className='address_div'><span className='subtitle_address_details'>Green  Inn Banquet.(1st Floor),7,Rafi Ahmed Kidwai Rd.near crown cinema, janbazar,Taltala kol-13</span></div></Row>
            </Container>
        </div>
    )
}

export default LandingPage

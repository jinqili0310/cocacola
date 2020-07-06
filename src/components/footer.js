import React, { Component } from 'react';
import { Row, Col} from 'react-bootstrap';

class Footer extends Component {
	render() {
		return (
			<Row lg={4} className="row-footer">
				<Col className="col-footer">
					<p className="footer-title">EXPLORE</p>
					<p className="shop-link">
						PRODUCT LOCATOR
					</p>
					<p className="shop-link">
						REWARDS
					</p>
					<p className="shop-link">
						GIVE
					</p>
					<p className="shop-link">
						SIP & SCAN®
					</p>
				</Col>
				<Col className="col-footer">
					<p className="footer-title">RESOURCES</p>
					<p className="shop-link">
						COMPANY INFORMATION
					</p>
					<p className="shop-link">
						WORLD OF COCA-COLA
					</p>
					<p className="shop-link">
						CAREERS
					</p>
				</Col>
				{/* <Col className="col-footer">
					<p className="footer-title">DOWNLOAD THE COCA-COLA APP</p>
					<Row>
						<Col md={5}>
							<a className="shop-link" href="/" style={{ float: 'left' }}>
								<img alt="apple download" src={appleDownload} />
							</a>
						</Col>
						<Col md={5}>
							<a className="shop-link" href="/" style={{ float: 'left' }}>
								<img alt="google download" src={googleDownload} />
							</a>
						</Col>
					</Row>
				</Col> */}
				{/* <Col className="col-footer footer-right">
					<p className="footer-title">SIGN UP TO HEAR FROM US</p>
					<p>We'll send you emails on the latest happenings, promotions, and more.</p>
					<p className="footer-text">EMAIL</p>
					<InputGroup className="mb-3 email-input">
						<FormControl aria-label="Default" aria-describedby="inputGroup-sizing-default" />
					</InputGroup>
					<p className="footer-text">DATE OF BIRTH</p>
					<br />
					<div className="birth-group">
						<Dropdown>
							<Dropdown.Toggle className="birth-dropdown" id="dropdown-basic">
								Month
							</Dropdown.Toggle>
							<Dropdown.Menu>
								<Dropdown.Item href="/" disabled selected>
									Month
								</Dropdown.Item>
								<Dropdown.Item href="/">January</Dropdown.Item>
								<Dropdown.Item href="/">February</Dropdown.Item>
								<Dropdown.Item href="/">March</Dropdown.Item>
								<Dropdown.Item href="/">April</Dropdown.Item>
								<Dropdown.Item href="/">May</Dropdown.Item>
								<Dropdown.Item href="/">June</Dropdown.Item>
								<Dropdown.Item href="/">July</Dropdown.Item>
								<Dropdown.Item href="/">August</Dropdown.Item>
								<Dropdown.Item href="/">September</Dropdown.Item>
								<Dropdown.Item href="/">October</Dropdown.Item>
								<Dropdown.Item href="/">November</Dropdown.Item>
								<Dropdown.Item href="/">December</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
						<Dropdown>
							<Dropdown.Toggle className="birth-dropdown" id="dropdown-basic">
								Day
							</Dropdown.Toggle>
							<Dropdown.Menu>
								<Dropdown.Item href="/" disabled selected>
									Day
								</Dropdown.Item>
								<Dropdown.Item href="/">01</Dropdown.Item>
								<Dropdown.Item href="/">02</Dropdown.Item>
								<Dropdown.Item href="/">03</Dropdown.Item>
								<Dropdown.Item href="/">04</Dropdown.Item>
								<Dropdown.Item href="/">05</Dropdown.Item>
								<Dropdown.Item href="/">06</Dropdown.Item>
								<Dropdown.Item href="/">07</Dropdown.Item>
								<Dropdown.Item href="/">08</Dropdown.Item>
								<Dropdown.Item href="/">09</Dropdown.Item>
								<Dropdown.Item href="/">10</Dropdown.Item>
								<Dropdown.Item href="/">11</Dropdown.Item>
								<Dropdown.Item href="/">12</Dropdown.Item>
								<Dropdown.Item href="/">13</Dropdown.Item>
								<Dropdown.Item href="/">14</Dropdown.Item>
								<Dropdown.Item href="/">15</Dropdown.Item>
								<Dropdown.Item href="/">16</Dropdown.Item>
								<Dropdown.Item href="/">17</Dropdown.Item>
								<Dropdown.Item href="/">18</Dropdown.Item>
								<Dropdown.Item href="/">19</Dropdown.Item>
								<Dropdown.Item href="/">20</Dropdown.Item>
								<Dropdown.Item href="/">21</Dropdown.Item>
								<Dropdown.Item href="/">22</Dropdown.Item>
								<Dropdown.Item href="/">23</Dropdown.Item>
								<Dropdown.Item href="/">24</Dropdown.Item>
								<Dropdown.Item href="/">25</Dropdown.Item>
								<Dropdown.Item href="/">26</Dropdown.Item>
								<Dropdown.Item href="/">27</Dropdown.Item>
								<Dropdown.Item href="/">28</Dropdown.Item>
								<Dropdown.Item href="/">29</Dropdown.Item>
								<Dropdown.Item href="/">30</Dropdown.Item>
								<Dropdown.Item href="/">31</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
						<Dropdown>
							<Dropdown.Toggle className="birth-dropdown" id="dropdown-basic">
								Year
							</Dropdown.Toggle>
							<Dropdown.Menu>
								<Dropdown.Item href="/" disabled selected>
									Year
								</Dropdown.Item>
								<Dropdown.Item href="/">2020</Dropdown.Item>
								<Dropdown.Item href="/">2019</Dropdown.Item>
								<Dropdown.Item href="/">2018</Dropdown.Item>
								<Dropdown.Item href="/">2017</Dropdown.Item>
								<Dropdown.Item href="/">2016</Dropdown.Item>
								<Dropdown.Item href="/">2015</Dropdown.Item>
								<Dropdown.Item href="/">2014</Dropdown.Item>
								<Dropdown.Item href="/">2013</Dropdown.Item>
								<Dropdown.Item href="/">2012</Dropdown.Item>
								<Dropdown.Item href="/">2011</Dropdown.Item>
								<Dropdown.Item href="/">2010</Dropdown.Item>
								<Dropdown.Item href="/">2009</Dropdown.Item>
								<Dropdown.Item href="/">2008</Dropdown.Item>
								<Dropdown.Item href="/">2007</Dropdown.Item>
								<Dropdown.Item href="/">2006</Dropdown.Item>
								<Dropdown.Item href="/">2005</Dropdown.Item>
								<Dropdown.Item href="/">2004</Dropdown.Item>
								<Dropdown.Item href="/">2003</Dropdown.Item>
								<Dropdown.Item href="/">2002</Dropdown.Item>
								<Dropdown.Item href="/">2001</Dropdown.Item>
								<Dropdown.Item href="/">2000</Dropdown.Item>
								<Dropdown.Item href="/">1999</Dropdown.Item>
								<Dropdown.Item href="/">1998</Dropdown.Item>
								<Dropdown.Item href="/">1997</Dropdown.Item>
								<Dropdown.Item href="/">1996</Dropdown.Item>
								<Dropdown.Item href="/">1995</Dropdown.Item>
								<Dropdown.Item href="/">1994</Dropdown.Item>
								<Dropdown.Item href="/">1993</Dropdown.Item>
								<Dropdown.Item href="/">1992</Dropdown.Item>
								<Dropdown.Item href="/">1991</Dropdown.Item>
								<Dropdown.Item href="/">1990</Dropdown.Item>
								<Dropdown.Item href="/">1989</Dropdown.Item>
								<Dropdown.Item href="/">1988</Dropdown.Item>
								<Dropdown.Item href="/">1987</Dropdown.Item>
								<Dropdown.Item href="/">1986</Dropdown.Item>
								<Dropdown.Item href="/">1985</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</div>
					<InputGroup className="input-checkbox">
						<Row>
							<Col md={1}>
								<InputGroup.Prepend>
									<InputGroup.Checkbox
										className="checkbox-style"
										aria-label="Checkbox for following text input"
									/>
								</InputGroup.Prepend>
							</Col>
							<Col md={10}>
								<p className="checkbox-text">
									I agree to the Coca-Cola Company's{' '}
									<a href="/" className="checkbox-link">
										Terms of Use
									</a>{' '}
									and{' '}
									<a href="/" className="checkbox-link">
										Privacy Policy.
									</a>
								</p>
							</Col>
						</Row>
					</InputGroup>
					<Button className="footer-button">JOIN THE LIST</Button>
				</Col> */}
			</Row>
		);
	}
}

export default Footer;

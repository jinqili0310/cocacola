import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';
import Navigation from './navigation';
import Footer from './footer';
import SnsLinks from './snsLinks';
import historyOne from '../assets/images/history.evolution1.jpg';
import historyTwo from '../assets/images/history.alwayscool1.jpg';
import historyThree from '../assets/images/history.openhappiness1.jpg';

class History extends Component {
	state = {};
	render() {
		return (
			<Container className="history-container">
				<Row lg={1} className="history-nav">
					<Navigation />
				</Row>
				<Row lg={1} className="history-content">
					<div className="history-text">
						<h2>About Us</h2>
						<h3>Coca-Cola History</h3>
						<p>
							Visit the <strong>Coca‑Cola History page</strong> for a complete history of The Coca‑Cola
							Company.
						</p>
						<br />
						<p>
							Coca-Cola history began in 1886 when the curiosity of an Atlanta pharmacist, Dr. John S.
							Pemberton, led him to create a distinctive tasting soft drink that could be sold at soda
							fountains. He created a flavored syrup, took it to his neighborhood pharmacy, where it was
							mixed with carbonated water and deemed “excellent” by those who sampled it. Dr. Pemberton’s
							partner and bookkeeper, Frank M. Robinson, is credited with naming the beverage “Coca‑Cola”
							as well as designing the trademarked, distinct script, still used today.
						</p>
						<p className="history-text-medium">
							Did you know? The first servings of Coca‑Cola were sold for 5 cents per glass. During the
							first year, sales averaged a modest nine servings per day in Atlanta. Today, daily servings
							of <strong>Coca‑Cola beverages</strong> are estimated at 1.9 billion globally.
						</p>
						<p>
							Prior to his death in 1888, just two years after creating what was to become the world’s
							#1-selling sparkling beverage, Dr. Pemberton sold portions of his business to various
							parties, with the majority of the interest sold to Atlanta businessman, Asa G. Candler.
							Under Mr. Candler’s leadership, distribution of Coca‑Cola expanded to soda fountains beyond
							Atlanta. In 1894, impressed by the growing demand for Coca‑Cola and the desire to make the
							beverage portable, Joseph Biedenharn installed bottling machinery in the rear of his
							Mississippi soda fountain, becoming the first to put Coca‑Cola in bottles. Large scale
							bottling was made possible just five years later, when in 1899, three enterprising
							businessmen in Chattanooga, Tennessee secured exclusive rights to bottle and sell Coca‑Cola.
							The three entrepreneurs purchased the bottling rights from Asa Candler for just $1. Benjamin
							Thomas, Joseph Whitehead and John Lupton developed what became the Coca‑Cola worldwide
							bottling system.
						</p>
						<p>
							<img src={historyOne} alt="history" className="history-image" />Among the biggest challenges
							for early bottlers, were imitations of the beverage by competitors coupled with a lack of
							packaging consistency among the 1,000 bottling plants at the time. The bottlers agreed that
							a distinctive beverage needed a standard and distinctive bottle, and in 1916, the bottlers
							approved the unique contour bottle. The new Coca‑Cola bottle was so distinctive it could be
							recognized in the dark and it effectively set the brand apart from competition. The
							contoured Coca‑Cola bottle was trademarked in 1977. Over the years, the Coca‑Cola bottle has
							been inspiration for artists across the globe — a sampling of which can be viewed at World
							of Coca‑Cola in Atlanta. The first marketing efforts in Coca‑Cola history were executed
							through coupons promoting free samples of the beverage. Considered an innovative tactic back
							in 1887, couponing was followed by newspaper advertising and the distribution of promotional
							items bearing the Coca‑Cola script to participating pharmacies.
						</p>
						<p>
							Fast forward to the 1970s when Coca‑Cola’s advertising started to reflect a brand connected
							with fun, friends and good times. Many fondly remember the 1971 Hilltop Singers performing
							“I’d Like to Buy the World a Coke”, or the 1979 “Have a Coke and a Smile” commercial
							featuring a young fan giving Pittsburgh Steeler, “Mean Joe Greene”, a refreshing bottle of
							Coca‑Cola.
						</p>
						<h5>EVOLUTION OF THE COCA-COLA BOTTLE</h5>
						<p>
							<img src={historyTwo} alt="history" className="history-image" />The 1980s featured such
							memorable slogans as “Coke is It!”, “Catch the Wave” and “Can’t Beat the Feeling”. In 1993,
							Coca‑Cola experimented with computer animation, and the popular “Always Coca‑Cola” campaign
							was launched in a series of ads featuring animated polar bears. Each animated ad in the
							“Always Coca‑Cola” series took 12 weeks to produce from beginning to end. The bears were,
							and still are, a huge hit with consumers because of their embodiment of characteristics like
							innocence, mischief and fun. A favorite feature at World of Coca‑Cola is the ability to have
							your photo taken with the beloved 7′ tall Coca‑Cola Polar Bear.
						</p>
						<p>
							Did you know? One of the most famous advertising slogans in Coca‑Cola history “The Pause
							That Refreshes” first appeared in the Saturday Evening Post in 1929. The theme of pausing
							with Coca‑Cola refreshment is still echoed in today’s marketing.
						</p>
						<p>
							<img src={historyThree} alt="history" className="history-image" />In 2009, the “Open
							Happiness” campaign was unveiled globally. The central message of “Open Happiness” is an
							invitation to billions around the world to pause, refresh with a Coca‑Cola, and continue to
							enjoy one of life’s simple pleasures. The “Open Happiness” message was seen in stores, on
							billboards, in TV spots and printed advertising along with digital and music components —
							including a single featuring Janelle Monae covering the 1980 song, “Are You Getting Enough
							Happiness?” The happiness theme continued with “Open the Games. Open Happiness” featured
							during the 2010 Winter Olympic Games in Vancouver, followed by a 2010 social media
							extension, “Expedition 206” — an initiative whereby three happiness ambassadors travel to
							206 countries in 365 days with one mission: determining what makes people happy. The
							inspirational year-long journey is being recorded and communicated via blog posts, tweets,
							videos and pictures.
						</p>
					</div>
				</Row>
				<Footer />
				<SnsLinks />
			</Container>
		);
	}
}

export default History;

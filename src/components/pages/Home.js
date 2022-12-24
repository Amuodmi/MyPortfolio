import React from "react";
import Video from "../../images/WebsiteVideo.mp4";
import { NameSVG } from "../../components/namesvg";

function Home() {
	return (
		<div>
			{/* <div className="cover-bgItem"> */}
			<NameSVG />

			<div className="navBar">
				<h3>
					<a className="navBarText" href="#">
						Resume
					</a>
				</h3>
				<h3>
					<a className="navBarText" href="#">
						Previous Projects
					</a>
				</h3>
				<h3>
					<a className="navBarText" href="#">
						Skills
					</a>
				</h3>
				<h3>
					<a className="navBarText" href="#">
						Contact
					</a>
				</h3>
			</div>

			<div className="vl"></div>
			<video
				poster="../../images/beach.jpeg"
				autoPlay={true}
				playsInline={true}
				loop={true}
				muted={true}
				src={Video}
				type="video/mp4"
				className="websiteVideo"
				alt="video for website"
			/>
		</div>
	);
}

export default Home;

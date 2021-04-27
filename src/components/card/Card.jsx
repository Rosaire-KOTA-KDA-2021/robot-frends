import React from "react";

import {
	MDBCard,
	MDBCardBody,
	MDBCardTitle,
	MDBCardText,
	MDBCardImage,
	MDBBtn,
	MDBRipple,
} from "mdb-react-ui-kit";

import { Link } from "react-router-dom";
import ReactLoading from "react-loading";

const Card = ({ friends, searchFriends }) => {
	let url = "https://robohash.org/";
	let search = [];

	const filterRoboFriends = () => {
		const filterRoboFriend = friends.filter((friendRobot) => {
			return friendRobot.firstname.toLowerCase().includes(searchFriends);
		});
		return filterRoboFriend;
	};
	const renderRobotsFriends = () => {
		if (filterRoboFriends().length > 0) {
			search = filterRoboFriends();
		} else {
			search = friends;
		}
		if (search.length === 0) {
			return (
				<div className="d-flex flex-justify-center">
					<span className="text-white text-lg">Chargement...</span>
					<ReactLoading type="bars" color="#fff" />
				</div>
			);
		} else {
			return search.map((friendRobot) => {
				return (
					<>
						<div className="col-md-3 mb-5 mt-3">
							<MDBCard key={friendRobot.id} className="card-lite">
								<MDBRipple
									rippleColor="light"
									rippleTag="div"
									className="bg-image hover-overlay"
								>
									<MDBCardImage
										src={`${url}${friendRobot.id}`}
										fluid
										alt="..."
									/>
									<a>
										<div
											className="mask"
											style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
										></div>
									</a>
								</MDBRipple>
								<MDBCardBody>
									<MDBCardTitle>{friendRobot.firstname}</MDBCardTitle>
									<MDBCardText>{friendRobot.email}.</MDBCardText>
									<button className="btn outline-primary">
										<Link to={`/robot/${friendRobot.id}`}>Details</Link>
									</button>
								</MDBCardBody>
							</MDBCard>
						</div>
					</>
				);
			});
		}
	};

	return (
		<>
			<div className="row">{renderRobotsFriends()}</div>
		</>
	);
};
export default Card;

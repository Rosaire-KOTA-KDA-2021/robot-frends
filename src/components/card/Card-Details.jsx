import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import ReactLoading from "react-loading";
import {
	MDBCard,
	MDBCardBody,
	MDBCardTitle,
	MDBCardText,
	MDBCardImage,
	MDBRow,
	MDBCol,
	MDBBtn,
	MDBRipple,
} from "mdb-react-ui-kit";
let url = "https://robohash.org/";

function CardDetails(props) {
	const [personalRobot, setPersonalRobot] = useState([]);
	const [friends, setFriends] = useState([]);
	console.log("marcos:", props.marcos);
	useEffect(function () {
		fetch("http://localhost:3000/users")
			.then(function (result) {
				return result.json();
			})
			.then(function (data) {
				const robotPersonalFriendlist = data.map((robotPersonal) => {
					return {
						id: robotPersonal.id,
						name: robotPersonal.name,
						email: robotPersonal.email,
						address: robotPersonal.address,
						username: robotPersonal.username,
						website: robotPersonal.website,
						phone: robotPersonal.phone,
						description: robotPersonal.description,
					};
				});
				setPersonalRobot(robotPersonalFriendlist);
			});
	}, []);

	const getFriendById = () => {
		return personalRobot.find((friend) => {
			return friend.id == props.match.params.id;
		});
	};
	console.log("persona rbot :", personalRobot);
	console.log("getFriendById :", getFriendById());
	if (personalRobot.length == 0) {
		return (
			<div>
				<span className="text-white">Chargement...</span>
				<ReactLoading type="spinningBubbles" color="#fff" />
			</div>
		);
	} else {
		return (
			<div className="container mt-5">
				<h1 className="text-center">
					Mon ami &nbsp; &nbsp;{getFriendById().name}
				</h1>
				<MDBCard className="card-lite mt-4">
					<MDBRow className="g-0">
						<MDBCol md="4">
							<MDBCardImage
								src={`${url}${getFriendById().id}`}
								alt="..."
								fluid
							/>
						</MDBCol>
						<MDBCol md="8">
							<MDBCardBody>
								<MDBCardTitle>Bref Apperçu</MDBCardTitle>
								<MDBCardText>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
									Tenetur, mollitia explicabo. Id, suscipit. Ea aperiam optio,
									fuga ipsa laboriosam voluptatum nostrum tenetur, facere
									repellendus quos quo ad dignissimos asperiores voluptates!.
								</MDBCardText>
								<MDBCardText>
									<small className="text-muted">
										Adresse: {getFriendById().address}
									</small>
								</MDBCardText>
								<MDBCardText>
									<small className="text-muted">
										Site web: {getFriendById().website}
									</small>
								</MDBCardText>
								<MDBCardText>
									<small className="text-muted">
										Téléphone: {getFriendById().phone}
									</small>
								</MDBCardText>
								<MDBBtn color="primary">
									<Link to="/" className="back-link">
										Voir tous mes amis
									</Link>
								</MDBBtn>
							</MDBCardBody>
						</MDBCol>
					</MDBRow>
				</MDBCard>
			</div>
		);
	}
}

export default CardDetails;

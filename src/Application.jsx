import React, { useEffect, useState } from "react";
import Card from "./components/card/Card";
import InputField from "./components/input-Field/InputField";
import axios from "axios";
import { Route, Switch, useLocation } from "react-router-dom";
import CardDetails from "./components/card/Card-Details";
//const url = "http://jsonplaceholder.typicode.com/users";
const url = "http://localhost:3000/users";

const App = () => {
	const [friends, setFriends] = useState([]);
	const [searchFriends, setSearchFriends] = useState();
	const location = useLocation();
	let users = [];
	useEffect(() => {
		getRemoteUsers();
	}, []);
	const getRemoteUsers = () => {
		axios.get(url).then(function (response) {
			let users = response.data.map((user) => {
				return { id: user.id, firstname: user.name, email: user.email };
			});
			setFriends(users);
		});
	};
	const handelChange = (e) => {
		const searchdata = e.target.value.toLowerCase();

		setSearchFriends(searchdata);
	};
	const loaderCard = () => {
		return (
			<>
				<div className="container ">
					<Card friends={friends} searchFriends={searchFriends} />
				</div>
			</>
		);
	};
	const loaderCardDelatils = () => {
		return (
			<>
				<div className="container ">
					<CardDetails friends={friends} />
				</div>
			</>
		);
	};
	return (
		<>
			{location.pathname === "/" && <InputField change={handelChange} />}
			<Switch>
				<Route exact path="/" component={loaderCard} />
				<Route path="/robot/:id" component={CardDetails} />
			</Switch>
		</>
	);
};
export default App;

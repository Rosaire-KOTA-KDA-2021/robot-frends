import React from "react";
import { MDBInput } from "mdb-react-ui-kit";

function InputField(props) {
	return (
		<>
			<h1 className="text-center mt-4">Mes Amis Robots</h1>
			<div className="container mt-5">
				<div className="row">
					<div className="col-sm-4 offset-sm-4 d-flex flex-row justify-content-center">
						<input
							placeholder="Rechercher par nom"
							id="typeText"
							type="text"
							aria-describedby="textExample1"
							onChange={props.change}
							name="firstname"
							className="form-control form-text"
						/>
					</div>
				</div>
			</div>
		</>
	);
}

export default InputField;

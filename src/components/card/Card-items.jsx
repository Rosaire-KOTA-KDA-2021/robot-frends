import React from 'react';
import PropTypes from 'prop-types';



import {
	MDBCard,
	MDBCardBody,
	MDBCardTitle,
	MDBCardText,
	MDBCardImage,
	MDBBtn,
	MDBRipple,
} from "mdb-react-ui-kit";

const CardItems=(props)=> {
    return (
        <div className="col-md-4 mb-5">
            <MDBCard>
			<MDBRipple
				rippleColor="light"
				rippleTag="div"
				className="bg-image hover-overlay"
			>
				<MDBCardImage
					src={`https://robohash.org/${props.id}`}
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
				<MDBCardTitle>{props.friendRobot.firstname}</MDBCardTitle>
				<MDBCardText>
                {props.friendRobot.email}.
				</MDBCardText>
			
			</MDBCardBody>
		</MDBCard>

         </div>
        
    );
}

export default CardItems;
import React, { useState } from "react";

const AppointmentForm = ({ addAppointment }) => {
	const [name, setName] = useState("");
	const [date, setDate] = useState("");

    const handleSubmit = (e) => {
        e.preventDeafault();
        addAppointment({name, date});
        setName("");
        setDate("");
    }
    return(
        <div className="container">
           <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-25">
                        <label for="fname">Full Name</label>
                    </div>
                    <div className="col-75">
                    <input
							type="text"
							id="fname"
							name="firstname"
							placeholder="Your name.."
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
                    </div>
                </div>
           </form>
        </div>
    )
}
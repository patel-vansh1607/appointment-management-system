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
        <div>
            <h1> hi</h1>
        </div>
    )
}
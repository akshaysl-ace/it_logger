import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddTechModal = () => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");

    const onSubmit = () => {
        if (firstname === "" || lastname === "") {
            M.toast({ html: "Please enter first and last name" });
        } else {
            console.log("clicked from tech modal");
            setFirstname("");
            setLastname("");
        }
    }

    return (
        <div id="add-tech-modal" className="modal">
            <div className="modal-content">
                <h4>New Technician</h4>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name="firstname" value={firstname} onChange={e => setFirstname(e.target.value)} />
                        <label htmlFor="firstname" className="active">First Name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name="lastname" value={lastname} onChange={e => setLastname(e.target.value)} />
                        <label htmlFor="lastname" className="active">Last Name</label>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <a href="#!" onClick={onSubmit} className="modal-close waves-effect blue waves-light btn">Enter</a>
            </div>
        </div>
    );
}

export default AddTechModal;

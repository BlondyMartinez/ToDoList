import React from "react";

const Note = () => {
	return (
		<div className="col-lg-4  col-sm-11 col-md-8 d-flex flex-column justify-content-center align-items-center">
			<div className="note align-middle p-2 w-100">
				<div>0 items left.</div>
			</div>
			<div className="note" style={{ width: `95%`, height: '5px', zIndex: '-1' }}></div>
			<div className="note" style={{ width: `90%`, height: '5px', zIndex: '-2'}}></div>
		</div>
	);
};

export default Note;
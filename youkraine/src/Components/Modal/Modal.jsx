import React, { useState } from "react";
import "./Modal.css";
import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "#2081e2",
};

const Modal = ({
  openForm,
  setOpenForm,
  spinner,
  setSpinner,
  mint,
  isMessagge,
  messagge,
  setOpenModal,
  setIsMessage,
  setFormData,
  formData,
  messagge2,
}) => {
  const [txType, setTxType] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    setOpenForm(false);
    setTxType(true);
  };

  return (
    <div className="claim-modal">
      <div className="claim-modal-container">
        {openForm ? (
          <>
            <h4 className="modal-title">Free Print Form</h4>
            <form className="forms-container" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                required
                placeholder="Name"
                onChange={handleChange}
              />
              <input
                type="text"
                name="phone"
                required
                placeholder="Mobile"
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                required
                placeholder="nft@youkraine.com"
                onChange={handleChange}
              />
              <input
                type="text"
                name="address"
                required
                placeholder="Address"
                onChange={handleChange}
              />
              <button className="submit-form" type="submit">
                Next
              </button>
            </form>
          </>
        ) : null}
        {txType ? (
          <>
            <h4 className="modal-title">How Would you Like To Pay</h4>
            <div className="tx-container">
              <div className="submit-form extra-image">
                Credit Card{" "}
                <img
                  className="form-image"
                  src="https://img.icons8.com/ios/50/FFFFFF/credit-card-front.png"
                />
              </div>{" "}
              <div
                className="submit-form extra-image"
                onClick={() => {
                  setTxType(false);
                  setSpinner(true);
                  mint();
                }}
              >
                Ethereum
                <img
                  className="form-image"
                  src="https://img.icons8.com/pastel-glyph/64/FFFFFF/ethereum--v2.png"
                />
              </div>
            </div>
          </>
        ) : null}
        {spinner ? (
          <div className="spinner-container">
            <ClipLoader
              color={"white"}
              loading={spinner}
              cssOverride={override}
              size={150}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        ) : null}
        {isMessagge ? (
          <div className="spinner-container last">
            <p>{messagge}</p>
            <p>{messagge2}</p>
            <div
              className="submit-form"
              onClick={() => {
                setIsMessage(false);
                setOpenModal(false);
              }}
            >
              Back
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Modal;

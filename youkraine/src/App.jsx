import "./App.css";
import { useState } from "react";
import Header from "./Components/Header/Header";
import { useEthers } from "@usedapp/core";
import { BigNumber, ethers } from "ethers";
import abi from "./assets/ABI.json";
import Modal from "./Components/Modal/Modal";

function App() {
  const { activateBrowserWallet, account } = useEthers();
  const TokenAddress = "0x423cfe74590EFD03969372a41dD993de13595208";
  const [openModal, setOpenModal] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const [spinner, setSpinner] = useState(false);
  const [isMessagge, setIsMessage] = useState(false);
  const [messagge, setMessage] = useState("");
  const [messagge2, setMessage2] = useState("");
  const [mintedToken, setMintedToken] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  const config = {
    SecureToken: import.meta.env.VITE_SECURETOKEN,
    To: "badcreaturessociety@gmail.com",
    From: import.meta.env.VITE_EMAIL,
    Subject: "Shipping Detail for " + formData.name,
    Body:
      "New youkraine nft sold to " +
      formData.name +
      ". Shipping Details are as follows address " +
      formData.address +
      ", email " +
      formData.email +
      " and phone " +
      formData.phone +
      ". Token id is " +
      mintedToken +
      ".",
  };

  const mint = async () => {
    if (account) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      let mailerResponse;

      const contract = new ethers.Contract(TokenAddress, abi, signer);

      try {
        const response = await contract.mint(BigNumber.from(1));

        await response.wait(1);

        let responseSupply = await contract.totalSupply();
        responseSupply = Number(responseSupply._hex);

        for (let i = responseSupply - 10; i <= responseSupply; i++) {
          const response = await contract.ownerOf(i);
          if (response == account) {
            setMintedToken(i);
          }
        }

        if (window.Email) {
          mailerResponse = await window.Email.send(config);
        }

        setSpinner(false);
        setIsMessage(true);

        setMessage("Successfully mint your youkraune nft!");

        if (mailerResponse == "OK")
          setMessage2("Your free print is on its way!");
      } catch (error) {
        setSpinner(false);
        setIsMessage(true);
        setMessage("Failed to mint with ethereum!");
      }
    }

    setFormData({
      name: "",
      phone: "",
      email: "",
      address: "",
    });
  };

  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="display-image">
          <img
            src="https://coffee-urban-primate-682.mypinata.cloud/ipfs/QmfVxWiczC8DhJVq16ZZgdaVTJNhT7xP73tjkaYztY8xpz/1009.png"
            className="display-image-one"
            alt=""
          />
          <img
            src="https://coffee-urban-primate-682.mypinata.cloud/ipfs/QmfVxWiczC8DhJVq16ZZgdaVTJNhT7xP73tjkaYztY8xpz/1013.png"
            className="display-image-two"
            alt=""
          />
        </div>
        <div className="mint-area">
          <button
            className="connect-wallet"
            onClick={() => {
              activateBrowserWallet();
              console.log(account);
            }}
          >
            {account
              ? account.slice(0, 4) + "..." + account.slice(-4)
              : "Connect Metamask"}
          </button>
          <button
            className="mint-button"
            onClick={() => {
              if (account) {
                setOpenForm(true);
                setOpenModal(true);
              }
            }}
          >
            Mint
          </button>
        </div>
      </div>

      {openModal ? (
        <Modal
          openForm={openForm}
          setOpenForm={setOpenForm}
          spinner={spinner}
          setSpinner={setSpinner}
          mint={mint}
          isMessagge={isMessagge}
          setIsMessage={setIsMessage}
          messagge={messagge}
          setOpenModal={setOpenModal}
          setFormData={setFormData}
          formData={formData}
          messagge2={messagge2}
        />
      ) : null}
    </div>
  );
}

export default App;

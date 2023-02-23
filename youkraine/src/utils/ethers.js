const mint = async ({
  TokenAddress,
  abi,
  setFormData,
  setSpinner,
  setIsMessage,
  setMessage2,
  setMintedToken,
}) => {
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

      if (mailerResponse == "OK") setMessage2("Your free print is on its way!");
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

export { mint };

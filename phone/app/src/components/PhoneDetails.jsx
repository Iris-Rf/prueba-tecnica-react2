import { useEffect, useState } from "react";

export const PhoneDetails = () => {
  const [phonesList, setPhonesList] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await fetch("http://localhost:8080/phones").then((res) =>
        res.json()
      );
      setPhonesList(data);
    })();
  }, []);

  return (
    <>
      {phonesList.map((phone) => (
        <div className="counterPhones">
          <img src={phone.imageFileName}></img>
          <h3>{phone.description}</h3>
          <h3>{phone.price}</h3>
        </div>
      ))}
    </>
  );
};

export default PhoneDetails;
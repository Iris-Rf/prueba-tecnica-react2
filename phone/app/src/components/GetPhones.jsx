import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import Popup from "reactjs-popup";
// import Details from "./Details";

export const GetPhones = () => {
  const [phonesList, setPhonesList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    (async () => {
      const data = await fetch("http://localhost:8080/phones").then((res) =>
        res.json()
      );
      setPhonesList(data);
      setLoading(false);
    })();
  }, [search]);

  if (loading) {
    return <ClipLoader />;
  }

  const searched = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  // let results = [];
  // if (search) {
  //   results = phonesList;
  // } else {
  //   phonesList.filter((item) =>
  //     item.name.toLowerCase().includes(search.toLowerCase)
  //   );
  // }

  const results =
    search === ""
      ? phonesList
      : phonesList.filter((phone) => {
          return phone.name.toLowerCase().includes(search.toLowerCase());
        });
  // console.log(results);
  return (
    <>
      <nav>ALL PHONES📱</nav>
      <div className="section"></div>
      <div className="black">🖤 SOLO HASTA EL 23 DE DICIEMBRE 🖤</div>
      <div className="container-input">
        <input
          value={search}
          onChange={searched}
          type="text"
          placeholder="Search"
          className="search"
        ></input>
      </div>
      <div className="counterPhones">
        {results.map((phone) => (
          <div key={phone.name} className="phonesLi">
            <h1>{phone.name}</h1>
            <img src={phone.imageFileName}></img>
            <Popup trigger={ <button class="cta">
              <span class="hover-underline-animation"> More info. </span>
              <svg
                viewBox="0 0 46 16"
                height="10"
                width="30"
                xmlns="http://www.w3.org/2000/svg"
                id="arrow-horizontal"
              >
                <path
                  transform="translate(30)"
                  d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                  data-name="Path 10"
                  id="Path_10"
                ></path>
              </svg>
            </button>}>
              <h2 className="description">{phone.description}</h2>
            </Popup>

           
          </div>
        ))}
      </div>
      {/* <Details /> */}
    </>
  );
};

export default GetPhones;


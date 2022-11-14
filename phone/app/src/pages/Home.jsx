import React, { useState } from 'react'
import ClipLoader from "react-spinners/ClipLoader";
useState

const Home = () => {
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    (async () => {
      const data = await fetch("http://localhost:8080/phones").then((res) =>
        res.json()
      );
      setPhonesList(data);
      setLoading(false);
    })();
  }, [search]);
  return (
    <div>Home</div>
  )
}

export default Home


// (async () => {
//   const data = await axios.get('http://localhost:8080/cursos');
//   setCurso(data.data);
// })();
// const createAlumn = (ev) => {
// const alumn = {
//   ...item,
//   name: name,
//   surname: ${surname} ${surname2} ,
//   email: email,
//   movil: movil,
// };

// postAlumn(alumn);
// };

// const postAlumn = async (item) => {
// console.log(item);
// axios({
//   method: 'put',
//   url: http://localhost:8080/alumnos/${item.id},
//   data: item,
// });
// };
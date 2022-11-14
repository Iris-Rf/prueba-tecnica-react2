export const GetData = async () => {
    try {
      const data = await fetch(`http://localhost:8080/phones`);
      const dataJSON = await data.json();
      return dataJSON;
    } catch (error) {
      console.log("Error:", error);
    }
  };
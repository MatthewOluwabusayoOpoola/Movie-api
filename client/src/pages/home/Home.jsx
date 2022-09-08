import "./Home.scss";
import Navbar from "../../components/navbar/Navbar.jsx";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type" + type : ""}${genre ? "&genre=" + genre : ""}`,
          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMDEwZDM4MzU2MDg2MzJhNDg5MzE1OCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MjUyNDYyNiwiZXhwIjoxNjYyOTU2NjI2fQ.UrnmSCTqRA0Xi0l0YOesrebkx7RDLyWDlO7fb4OjVWY",
            },
          }
        );
        // console.log(res);
        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);
  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />
      {lists.map((list) => (
        <List list={list} />
      ))}
    </div>
  );
};

export default Home;

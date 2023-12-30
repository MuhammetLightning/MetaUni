import "./leftBar.scss";
import Friends from "../../assets/1.png";
import Groups from "../../assets/2.png";
import Events from "../../assets/6.png";
import Messages from "../../assets/10.png";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const LeftBar = () => {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);

  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src={"/upload/" + currentUser.profilePic} alt="" />
            <Link
              to={`/profile/${currentUser.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <span className="name">{currentUser.name}</span>
            </Link>
          </div>
          <div className="item">
            <img src={Friends} alt="" />
            <span>Friends</span>
          </div>
          <div className="item">
            <img src={Groups} alt="" />
            <span>Groups</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <div className="item">
            <img src={Events} alt="" />
            <span>Events</span>
          </div>

          <div className="item">
            <img src={Messages} alt="" />
            <span>Messages</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;

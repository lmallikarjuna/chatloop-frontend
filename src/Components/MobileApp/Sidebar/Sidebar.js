import "./Sidebar.css";
import { Avatar, IconButton } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import AddIcon from "@material-ui/icons/Add";
import SidebarChat from "./SidebarChat";
import { Auth } from "aws-amplify";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { Fragment } from "react";
toast.configure();

const Sidebar = ({ auth }) => {
  const history = useHistory();
  // Logout Function
  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      Auth.signOut();
      auth.setAuthenticated(false);
      auth.setUser(null);
      auth.setConversations(null);
      let message = "Logged Out Successfully";
      toast.success(message, {
        position: "top-right",
        autoClose: 0,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      history.push("/");
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <div className="mobile_sidebar">
      <div className="mobile_sidebar_header">
        {auth.conversations.profileImage && (
          <Avatar src={auth.conversations.profileImage} />
        )}
        <div className="side_header_right">
          <IconButton>
            <AddIcon />
          </IconButton>
          <IconButton onClick={(e) => handleLogout(e)}>
            <ExitToAppIcon />
          </IconButton>
        </div>
      </div>
      <div className="mobile_sidebar_search">
        <div className="mobile_sidebar_search_container">
          <SearchOutlinedIcon />
          <input placeholder="Search or start new chat" type="text" />
        </div>
      </div>
      <div className="mobile_sidebar_chats">
        {auth.conversations.conversations.items.length > 0 ? (
          <Fragment>
            {" "}
            {auth.conversations.conversations.items.map((chat, idx) => (
              <SidebarChat
                key={idx}
                chatRoomId={chat.chatRoomId}
                name={chat.name}
                description={chat.description}
                lastMessage={chat.lastMessage}
              />
            ))}{" "}
          </Fragment>
        ) : (
          <div className="no_sidebar_chat">
            {" "}
            <span> No chats yet. </span>{" "}
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;

import { ChangeProfile } from "../components/ChangeProfile";
import { AppContext } from "../App";
import { useContext } from "react";
export const Profile = () => {
    const {username} = useContext(AppContext);
    return (
        <div>This is profile page and username is {username}
            <ChangeProfile />
        </div>
    );
}
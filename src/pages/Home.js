import { useDispatch, useSelector } from "react-redux";

export const Home = () => {
    const user = useSelector((state) => state.user.value.username);

    return (
        <h1>
            This is Home Page {user}
        </h1>
    );
}
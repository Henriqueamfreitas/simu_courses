import { StyledHomePage } from "./style"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";

export const HomePage = ({ user, setUser }) => {
    const navigate = useNavigate()


    return (
        <StyledHomePage>
            <header>
                <h1>HubSim</h1>
                <Link to="/">Back</Link>
            </header>

            <div>
                <h2>Hello, {user.name}</h2>
                <p>{user.course_module}</p>
            </div>

            <div>
                <h2>What a shame! We're under development {":("}</h2>
                <p>Our application is under development. Stay tuned for updates!</p>
            </div>
        </StyledHomePage>
    )
}
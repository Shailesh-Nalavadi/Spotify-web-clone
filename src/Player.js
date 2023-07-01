import "./Player.css"
import Sidebar from "./Sidebar"
import Body from "./Body"
import Footer from "./Footer"

function Player({ spotify }) {
    return (
        <div className="Player">
            <div className="player_body">
                {/* Sidebar */}
                <Sidebar />
                {/* Body */}
                <Body spotify={spotify}/>
            </div>
            
            {/* Footer */}
            <Footer />
        </div>
    )
}

export default Player;
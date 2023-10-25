import ProfileCard from "./ProfileCard";

import SiriImage from "./images/siri.png";
import AlexaImage from "./images/alexa.png";
import CoronaImage from "./images/cortana.png";

function App() {
    return (
        <div>
            <div>Personal Digital Assistants</div>
            <ProfileCard image={AlexaImage} title="Alexa" handle="@alexa99" />
            <ProfileCard image={SiriImage} title="Siri" handle="@siri99" />
            <ProfileCard image={CoronaImage} title="Cortana" handle="@cortana" />
        </div>
    )
}

export default App;
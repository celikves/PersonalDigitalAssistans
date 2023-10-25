import 'bulma/css/bulma.css';
import ProfileCard from "./ProfileCard";
import SiriImage from "./images/siri.png";
import AlexaImage from "./images/alexa.png";
import CoronaImage from "./images/cortana.png";

function App() {
    return (
        <div>
            <section className='hero is-primary'>
                <div className='hero-body'>
                    <p className='title'>Personal Digital Assistants</p>
                </div>
            </section>
            <div className='container'>
                <section className='section'>
                    <div className='columns'>
                        <div className='column is-4'>
                            <ProfileCard image={AlexaImage} title="Alexa" handle="@alexa99" />

                        </div>
                        <div className='column is-4'>
                            <ProfileCard image={SiriImage} title="Siri" handle="@siri99" />

                        </div>
                        <div className='column is-4'>
                            <ProfileCard image={CoronaImage} title="Cortana" handle="@cortana" />
                        </div>
                    </div>
                </section>
            </div>

        </div>
    )
}

export default App;
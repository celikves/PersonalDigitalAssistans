function ProfileCard({ title, handle, image }) {
    //const { title, handle } = props;
    // destructuring const title = props.title; const handle = props.handle;

    return (<div>
        <img src={image} alt="pda logo" />
        <div>ProfileCard title is : {title}</div>
        <div>ProfileCard handler is : {handle} </div>
    </div>);
}

export default ProfileCard;
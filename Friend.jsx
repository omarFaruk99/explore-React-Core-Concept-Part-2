export default function Friend({ friend }) {
  //   console.log(friend);
  const { name, email, website } = friend;
  return (
    <div className="fstyle">
      <h4>Name: {name}</h4>
      <p>Email: {email}</p>
      <p>WebSite: {website}</p>
    </div>
  );
}

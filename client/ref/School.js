let School = ({ name, location, numberOfCourses }) => {
  return (
    <div>
      <h1>The name of my school is {name}</h1>
      <p>It is located at {location}</p>
      <p>They offer {numberOfCourses}</p>
    </div>
  );
};
export default School;

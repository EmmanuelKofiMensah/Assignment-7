let Person = (props) => {
  return (
    <div>
      <h1> My name is {props.name} </h1>
      <h1> I am {props.age} years old </h1>
      <h1> I am a {props.gender} </h1>
    </div>
  );
};

export default Person;

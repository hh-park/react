import './App.css';

function AppJSX() {
  const name = 'joy';
  const list = ['milk', 'banana', 'pear'];
  return (
    <>
      <h1 className="orange">{`hello, ${name}`}</h1>
      <h2>hello</h2>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <img
        src="https://plus.unsplash.com/premium_photo-1705335993407-ccb37db2753c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnxFNnRGT2xCWWVfQXx8ZW58MHx8fHx8"
        alt="nature"
        style={{ width: '200px', height: '200px' }}
      />
    </>
  );
}

export default AppJSX;

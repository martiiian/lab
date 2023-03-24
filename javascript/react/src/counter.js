let counter = 1

function Greeting({ counter }) {
  return (
    <h1 className="greeting">Hello world! {counter}</h1>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));

setInterval(() => {
  counter++
  root.render(<Greeting counter={counter} />);
}, 1000)

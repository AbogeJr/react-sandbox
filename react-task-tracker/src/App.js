import './index.css'

function App() {
  const name = "Aloys"
  const tasks = [
    {
    "id":1,
    "title":"1st todo",
    "body":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint iure facilis repudiandae dolorem nobis fuga qui eius officiis, harum magnam ullam nam cupiditate iste repellendus officia, rerum saepe, obcaecati sapiente? Perspiciatis, sed? Dolorum consectetur est saepe expedita provident, aut, sint odit neque labore inventore iusto, esse deserunt architecto harum. Laudantium!"
    },
    {
    "id":2,
    "title":"Second item",
    "body":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint iure facilis repudiandae dolorem nobis fuga qui eius officiis, harum magnam ullam nam cupiditate iste repellendus officia, rerum saepe, obcaecati sapiente? Perspiciatis, sed? Dolorum consectetur est saepe expedita provident, aut, sint odit neque labore inventore iusto, esse deserunt architecto harum. Laudantium!"
    },
    {
    "id":3,
    "title":"Learn HTTP",
    "body":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint iure facilis repudiandae dolorem nobis fuga qui eius officiis, harum magnam ullam nam cupiditate iste repellendus officia, rerum saepe, obcaecati sapiente? Perspiciatis, sed? Dolorum consectetur est saepe expedita provident, aut, sint odit neque labore inventore iusto, esse deserunt architecto harum. Laudantium!"
    }

    ]
    function printtask(item) {
      return (
        <div className="task-container">
          <h3> <span className="id">{item.id}.</span> {item.title}</h3>
          <p>{item.body}</p>
        </div>
      ) 
    }
  return (
    <div className="container">
      <h1>Hello, {name ? name : "World"}</h1>
      <h2>Tasks:</h2>
      <div className="box">
        {tasks.map(printtask)}
      </div>
    </div>
  );
}

export default App;

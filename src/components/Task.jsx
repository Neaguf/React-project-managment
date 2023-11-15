import NewTask from "./NewTask";

export default function Task({ tasks, onAdd, onDelete }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Title</h2>
      <NewTask onAdd={onAdd} />
      {tasks.length == 0 && (
        <p className="text-stone-800 my  -4 ">
          This project does not have any task yet.
        </p>
      )}
      {tasks.length > 0 && (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <span>{task.text}</span>
              <button>Clear</button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

import { FormEvent, useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { signUp } from "aws-amplify/auth";
import outputs from "../amplify_outputs.json";
import { Amplify } from "aws-amplify";

Amplify.configure(outputs);

const client = generateClient<Schema>();

interface SignUpFormElements extends HTMLFormControlsCollection {
  phone: HTMLInputElement;
  fullname: HTMLInputElement;
  password: HTMLInputElement;
}

interface SignUpForm extends HTMLFormElement {
  readonly elements: SignUpFormElements;
}

function App() {
  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);

  useEffect(() => {
    client.models.Todo.observeQuery().subscribe({
      next: (data) => setTodos([...data.items]),
    });
  }, []);

  function createTodo() {
    client.models.Todo.create({ content: window.prompt("Todo content") });
  }

  async function handleSubmit(event: FormEvent<SignUpForm>) {
    event.preventDefault();
    const form = event.currentTarget;
    // ... validate inputs
    await signUp({
      username: form.elements.phone.value,
      password: form.elements.password.value,
      options: {
        userAttributes: {
          fullname: form.elements.fullname.value,
        },
      },
    });
  }

  return (
    <main>
      <h1>My todos</h1>
      <button onClick={createTodo}>+ new</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.content}</li>
        ))}
      </ul>
      <div>
        🥳 App successfully hosted. Try creating a new todo.
        <br />
        <a href="https://docs.amplify.aws/react/start/quickstart/#make-frontend-updates">
          Review next step of this tutorial.
        </a>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fullname">Nombre:</label>
        <input type="text" id="fullname" name="fullname" />
        <label htmlFor="phone">Teléfono:</label>
        <input type="text" id="phone" name="phone" />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
        <input type="submit" />
      </form>
    </main>
  );
}

export default App;

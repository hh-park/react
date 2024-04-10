import React, { useReducer, useState } from 'react';
import personReducer from './reducer/person-reducer';

export default function AppMentorsButton() {
  const [person, dispatch] = useReducer(personReducer, initialPerson);

  const handleUpdate = () => {
    const prev = prompt(`who's name to change?`);
    const current = prompt(`what's your mentor's name?`);
    dispatch({ type: 'updated', prev, current });
  };

  const handleAdd = () => {
    const name = prompt(`What's new mentor's name?`);
    const title = prompt(`Whats's new mentor's title?`);
    dispatch({ type: 'added', name, title });
  };

  const handleRemove = () => {
    const name = prompt(`What's new mentor's name?`);
    dispatch({ type: 'deleted', name });
  };

  return (
    <div>
      <h1>
        {person.name} is {person.title}
      </h1>
      <p>{person.name}'s montor is</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <Button text={`Change Mentor's name`} onClick={handleUpdate} />
      <Button text={`Add Mentor`} onClick={handleAdd} />
      <Button text={`Delete Mentor`} onClick={handleRemove} />
    </div>
  );
}

function Button({ text, onClick }) {
  console.log('button', text, 're-rendering');
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: 'black',
        color: 'white',
        borderRadius: '20px',
        margin: '0.4rem',
      }}
    >
      {text}
    </button>
  );
}

const initialPerson = {
  name: 'Hailey',
  title: 'Developer',
  mentors: [
    {
      name: 'Ellie',
      title: 'Senior Developer',
    },
    {
      name: 'Joy',
      title: 'Senior Developer',
    },
  ],
};

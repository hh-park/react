import React, { useState } from 'react';

export default function AppMentor() {
  const [person, setPerson] = useState({
    name: 'Hailey',
    title: 'Developer',
    mentor: {
      name: 'Ellie',
      title: 'Senior Developer',
    },
  });
  return (
    <div>
      <h1>
        {person.name} is {person.title}
      </h1>
      <p>
        {person.name}'s montor is {person.mentor.name} ({person.mentor.title})
      </p>
      <button
        onClick={() => {
          const name = prompt(`what's your mentor's name?`);
          setPerson((person) => ({
            ...person,
            mentor: { ...person.mentor, name },
          }));
        }}
      >
        Change Mentor's name
      </button>
      <button
        onClick={() => {
          const title = prompt(`what's your mentor's title?`);
          setPerson((person) => ({
            ...person,
            mentor: { ...person.mentor, title },
          }));
        }}
      >
        Change Mentor's title
      </button>
    </div>
  );
}

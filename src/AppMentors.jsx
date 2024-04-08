import React, { useState } from 'react';

export default function AppMentor() {
  const [person, setPerson] = useState(initialPerson);
  const handleUpdate = () => {
    const prev = prompt(`who's name to change?`);
    const current = prompt(`what's your mentor's name?`);
    setPerson((person) => ({
      ...person,
      mentors: person.mentors.map((mentor) => {
        if (mentor.name === prev) {
          return { ...mentor, name: current };
        }
        return mentor;
      }),
    }));
  };
  const handleAdd = () => {
    const name = prompt(`What's new mentor's name?`);
    const title = prompt(`Whats's new mentor's title?`);
    setPerson((person) => ({
      ...person,
      mentors: [...person.mentors, { name, title }],
    }));
  };
  const handleRemove = () => {
    const name = prompt(`What's new mentor's name?`);
    setPerson((person) => ({
      ...person,
      mentors: person.mentors.filter((mentor) => mentor.name !== name),
    }));
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
      <button onClick={handleUpdate}>Change Mentor's name</button>
      <button onClick={handleAdd}>Add Mentor</button>
      <button onClick={handleRemove}>Delete Mentor</button>
    </div>
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

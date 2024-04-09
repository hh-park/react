import React from 'react';
import { useImmer } from 'use-immer';

export default function AppMentorsImmer() {
  const [person, updatePerson] = useImmer(initialPerson);
  const handleUpdate = () => {
    const prev = prompt(`who's name to change?`);
    const current = prompt(`what's your mentor's name?`);
    updatePerson((person) => {
      const mentor = person.mentors.find((m) => m.name === prev);
      mentor.name = current;
    });
  };

  const handleAdd = () => {
    const name = prompt(`What's new mentor's name?`);
    const title = prompt(`Whats's new mentor's title?`);
    updatePerson((person) => person.mentors.push({ name, title }));
  };

  const handleRemove = () => {
    const name = prompt(`What's new mentor's name?`);
    updatePerson((person) => {
      const index = person.mentors.findIndex((m) => (m.name = name));
      person.mentors.splice(index, 1);
    });
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

import React, { useState } from 'react';

export default function AppMentor() {
  const [person, setPerson] = useState({
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
  });

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
      <button
        onClick={() => {
          const prev = prompt(`who's name to change?`);
          const current = prompt(`what's your mentor's name?`);
          const editedMentors = person.mentors.map((mentor) => {
            if (mentor.name === prev) {
              return { ...mentor, name: current };
            } else {
              return mentor;
            }
          });
          // setPerson((prev) => ({ ...prev, mentors: editedMentors }));
          setPerson((person) => ({
            ...person,
            mentors: person.mentors.map((mentor) => {
              if (mentor.name === prev) {
                return { ...mentor, name: current };
              }
              return mentor;
            }),
          }));
        }}
      >
        Change Mentor's name
      </button>
      <button
        onClick={() => {
          const name = prompt(`What's new mentor's name?`);
          const title = prompt(`Whats's new mentor's title?`);
          setPerson((person) => ({
            ...person,
            mentors: [...person.mentors, { name, title }],
          }));
        }}
      >
        Add Mentor
      </button>
      <button
        onClick={() => {
          const name = prompt(`What's new mentor's name?`);
          setPerson((person) => ({
            ...person,
            mentors: person.mentors.filter((mentor) => mentor.name !== name),
          }));
        }}
      >
        Delete Mentor
      </button>
    </div>
  );
}

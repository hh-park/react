import React from 'react';

export default function AppWrap() {
  return (
    <div>
      <Navbar>
        <Avatar
          name="Michael"
          size={200}
          image="https://plus.unsplash.com/premium_photo-1664127534779-f1ab9a1962df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXxFNnRGT2xCWWVfQXx8ZW58MHx8fHx8"
        />
        <p>hello</p>
      </Navbar>
    </div>
  );
}

function Navbar({ children }) {
  return <header style={{ backgroundColor: 'yellow' }}>{children}</header>;
}

function Avatar({ name, size, image }) {
  return (
    <div>
      <img
        src={image}
        alt={name}
        width={size}
        height={size}
        style={{ borderRadius: '50%' }}
      />
    </div>
  );
}

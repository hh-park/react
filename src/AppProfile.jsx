import './App.css';
import Profile from './components/Profile';
import Avatar from './components/Avatar';

function AppProfile() {
  return (
    <>
      <Avatar
        image="https://plus.unsplash.com/premium_photo-1664127534779-f1ab9a1962df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXxFNnRGT2xCWWVfQXx8ZW58MHx8fHx8"
        isNew={true}
      />
      <Profile
        image="https://plus.unsplash.com/premium_photo-1664127534779-f1ab9a1962df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXxFNnRGT2xCWWVfQXx8ZW58MHx8fHx8"
        name="Joy"
        title="Frontend Developer"
        isNew={true}
      />
      <Profile
        image="https://plus.unsplash.com/premium_photo-1664127534779-f1ab9a1962df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXxFNnRGT2xCWWVfQXx8ZW58MHx8fHx8"
        name="Hailey"
        title="SAP Developer"
      />
      <Profile
        image="https://plus.unsplash.com/premium_photo-1664127534779-f1ab9a1962df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXxFNnRGT2xCWWVfQXx8ZW58MHx8fHx8"
        name="Park"
        title="EAI Developer"
      />
    </>
  );
}

export default AppProfile;

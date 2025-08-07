import React, { useEffect, useState } from "react"
import Dashboard from "./Dashboard"
// App.js

import { useAuth } from "react-oidc-context";

export default function LoginPage() {
  const auth = useAuth();

  const signOutRedirect = () => {
    const clientId = "1g198u2h1v4fo855eij9e7mp7c";
    const logoutUri = "<logout uri>";
    const cognitoDomain = "https://us-east-12irurskt8.auth.us-east-1.amazoncognito.com";
    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
  };
  if (auth.isLoading) {
    return <div>Loading...</div>;
  }

  if (auth.error) {
    return <div>Encountering error... {auth.error.message}</div>;
  }

  if (auth.isAuthenticated) {
    return (
      <div>
        {/* <pre> Hello: {auth.user?.profile.email} </pre>
        <pre> ID Token: {auth.user?.id_token} </pre>
        <pre> Access Token: {auth.user?.access_token} </pre>
        <pre> Refresh Token: {auth.user?.refresh_token} </pre> */}
        <Dashboard />

        <button onClick={() => auth.removeUser()}>Sign out</button>
      </div>
    );
  }

  const [embedUrl, setEmbedUrl] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/embed-url', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userArn: 'arn:aws:quicksight:us-east-1:123456789012:user/default/your-user',
        dashboardId: 'your-dashboard-id',
        sessionName: 'your-session-name',
      }),
    })
      .then((res) => res.json())
      .then((data) => setEmbedUrl(data.embedUrl));
  }, []);

  return (
    <div>
      {<button onClick={() => auth.signinRedirect()}>Sign in</button>
      /* <button onClick={() => signOutRedirect()}>Sign out</button> */}
    </div>
  );
}
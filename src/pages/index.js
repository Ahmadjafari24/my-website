import React from 'react';
import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout title="Home" description="My Microsite Homepage">
      <main style={{padding: '2rem'}}>
        <h1>Welcome to My Microsite</h1>
        <p>
          This microsite introduces my academic background, professional interests,
          and selected resources.
        </p>
        <p>
          It includes information about my background, the purpose of this site,
          and ways to connect with me.
        </p>
      </main>
    </Layout>
  );
}
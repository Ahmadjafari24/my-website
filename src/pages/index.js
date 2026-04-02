import React from 'react';
import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout title="Home" description="Academic Microsite Homepage">
      <main style={{padding: '2rem', maxWidth: '900px', margin: '0 auto'}}>
        <section style={{marginBottom: '2rem'}}>
          <h1>Welcome to My Academic Microsite</h1>
          <p>
            This microsite introduces my academic background, professional interests,
            and selected resources. It was created to present a simple overview of
            my work, learning goals, and contact information.
          </p>
        </section>

        <section style={{marginBottom: '2rem'}}>
          <h2>Purpose of This Site</h2>
          <p>
            The purpose of this microsite is to provide a clear and organized space
            where visitors can learn about my background and the focus of my work.
          </p>
        </section>

        <section style={{marginBottom: '2rem'}}>
          <h2>Main Focus</h2>
          <p>
            This site focuses on academic interests, professional development, and
            useful personal or project-related information presented in a simple way.
          </p>
        </section>

        <section>
          <h2>Explore</h2>
          <p>
            Use the navigation bar to visit the About page and the Contact page for
            more details and additional links.
          </p>
        </section>
      </main>
    </Layout>
  );
}
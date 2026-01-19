const Index = () => {
  return (
    <main className="max-w-2xl mx-auto px-4 py-12">
      <header className="mb-12">
        <h1 className="text-lg mb-2">[Your Name]</h1>
        <p className="text-muted-foreground">Staff Software Engineer</p>
      </header>

      <section className="mb-10">
        <p className="mb-4">
          Staff Software Engineer with a track record of designing and delivering 
          scalable SaaS and platform systems from zero to production. Experienced 
          in system architecture, full-stack execution, and technical leadership, 
          with a focus on building reliable, integration-heavy products and 
          leveling up engineering teams.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-base mb-4 border-b border-border pb-1">Technologies</h2>
        <ul className="space-y-1">
          <li><span className="text-muted-foreground">Backend:</span> Laravel/PHP, Node.js, API Design, Distributed Systems, SaaS Architectures</li>
          <li><span className="text-muted-foreground">Frontend:</span> React, Next.js, React Native</li>
          <li><span className="text-muted-foreground">Data:</span> PostgreSQL, MySQL, MongoDB, Redis, RabbitMQ, ETL Pipelines</li>
          <li><span className="text-muted-foreground">Infrastructure:</span> AWS, Google Cloud, CI/CD, Monitoring & Observability</li>
          <li><span className="text-muted-foreground">Integrations:</span> Stripe, Shopify Platform, Third-Party APIs</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-base mb-4 border-b border-border pb-1">Experience</h2>
        
        <article className="mb-6">
          <div className="flex justify-between flex-wrap gap-1 mb-1">
            <h3 className="font-normal">Original Ventures</h3>
            <span className="text-muted-foreground">Jul 2025 – Present</span>
          </div>
          <p className="text-muted-foreground mb-2">Technical Lead / Senior Software Engineer</p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Platform owner for MLS, API, and ingestion systems powering IYBA.org</li>
            <li>Remediated architectural mismatches across legacy billing and access control</li>
            <li>Stabilized production by resolving infrastructure and deployment issues</li>
            <li>Built internal tooling to reduce operational overhead</li>
          </ul>
        </article>

        <article className="mb-6">
          <div className="flex justify-between flex-wrap gap-1 mb-1">
            <h3 className="font-normal">Lockhop</h3>
            <span className="text-muted-foreground">Jun 2024 – Present</span>
          </div>
          <p className="text-muted-foreground mb-2">Head of Engineering</p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Designed end-to-end architecture, taking product from concept to MVP</li>
            <li>Built cloud-native architecture using serverless and Terraform</li>
            <li>Delivered RESO-compliant MLS ETL for scalable listing updates</li>
            <li>Established CI/CD and team workflows for production reliability</li>
          </ul>
        </article>

        <article className="mb-6">
          <div className="flex justify-between flex-wrap gap-1 mb-1">
            <h3 className="font-normal">DevBase</h3>
            <span className="text-muted-foreground">Feb 2019 – Mar 2024</span>
          </div>
          <p className="text-muted-foreground mb-2">Principal / Lead Software Engineer</p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Progressed from Senior to Principal Engineer</li>
            <li>Led major platform re-architecture to multi-tenant SaaS model</li>
            <li>Spearheaded ~90% system overhaul with in-house and offshore teams</li>
            <li>Helped scale engineering team from ~10 to 100+ engineers</li>
          </ul>
        </article>

        <article className="mb-6">
          <div className="flex justify-between flex-wrap gap-1 mb-1">
            <h3 className="font-normal">Toptive</h3>
            <span className="text-muted-foreground">Aug 2015 – Oct 2020</span>
          </div>
          <p className="text-muted-foreground mb-2">Principal / Lead Software Engineer</p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Progressed from Junior to Senior Engineer</li>
            <li>Built 10+ production products including SaaS, mobile, e-commerce</li>
            <li>Lead Engineer on Shoptimized, integrating 80+ third-party tools</li>
            <li>Contributed to early-stage SaaS, real-time platforms, and mobile apps</li>
          </ul>
        </article>
      </section>

      <section className="mb-10">
        <h2 className="text-base mb-4 border-b border-border pb-1">Contact</h2>
        <ul className="space-y-1">
          <li><a href="mailto:your@email.com">your@email.com</a></li>
          <li><a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">github.com/yourusername</a></li>
          <li><a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">linkedin.com/in/yourusername</a></li>
        </ul>
      </section>

      <footer className="text-muted-foreground text-sm pt-8 border-t border-border">
        <p>Last updated: {new Date().getFullYear()}</p>
      </footer>
    </main>
  );
};

export default Index;

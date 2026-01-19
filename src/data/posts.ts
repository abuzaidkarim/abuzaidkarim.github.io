export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
}

export const posts: Post[] = [
  {
    slug: "scaling-engineering-teams",
    title: "Scaling Engineering Teams: Lessons from 10 to 100+ Engineers",
    date: "2024-12-15",
    excerpt: "What I learned helping scale an engineering organization through rapid growth while maintaining code quality and team culture.",
    content: `Scaling an engineering team from a small group to over a hundred engineers is one of the most challenging transitions a company can undergo. Here's what I learned during my time at DevBase.

## The Early Days

When I joined, we were a tight-knit group of about 10 engineers. Communication was effortless—you could just tap someone on the shoulder (or ping them directly) and get immediate feedback. Code reviews happened naturally, and everyone understood the entire codebase.

## The Growing Pains

As we started hiring aggressively, several challenges emerged:

**1. Communication Overhead**

What used to be a quick conversation now required documentation. We had to establish clear channels for different types of discussions—architecture decisions, bug reports, feature requests.

**2. Code Ownership**

With more people touching the codebase, we needed to establish clear ownership. We moved to a model where teams owned specific domains, reducing the cognitive load on any single engineer.

**3. Onboarding at Scale**

When you're hiring multiple engineers per week, you can't rely on tribal knowledge. We invested heavily in documentation and created a structured onboarding program.

## What Worked

- **Strong typing and static analysis**: Caught errors before they reached production
- **Comprehensive CI/CD**: Gave confidence to ship frequently
- **Clear architecture boundaries**: Reduced coupling between teams
- **Technical interviews by engineers**: Maintained hiring quality

## Conclusion

The key insight: what works at 10 engineers won't work at 100. Be willing to constantly re-evaluate and adapt your processes as you grow.`
  },
  {
    slug: "multi-tenant-saas-architecture",
    title: "Designing Multi-Tenant SaaS Architectures",
    date: "2024-11-20",
    excerpt: "A practical guide to building multi-tenant systems that scale, with lessons from migrating a monolith.",
    content: `Multi-tenancy is one of those concepts that sounds simple but has profound implications for your entire system design. Here's what I've learned from building and migrating multi-tenant systems.

## The Basics

Multi-tenancy means multiple customers (tenants) share the same application instance while their data remains isolated. There are several approaches:

**1. Shared Database, Shared Schema**

All tenants share the same tables. A tenant_id column distinguishes data.

Pros: Simple to implement, efficient resource usage
Cons: Requires careful query design, noisy neighbor risks

**2. Shared Database, Separate Schemas**

Each tenant gets their own database schema within a shared database.

Pros: Better isolation, easier to reason about
Cons: Schema migrations become complex, limited scalability

**3. Separate Databases**

Each tenant gets their own database.

Pros: Complete isolation, easy to scale individually
Cons: Operational overhead, higher costs

## Our Approach

At DevBase, we migrated from a monolith to a multi-tenant SaaS. We chose a hybrid approach:

- Shared database with tenant_id for most data
- Separate schemas for tenant-specific customizations
- Read replicas per tenant for heavy workloads

## Key Lessons

1. **Add tenant_id to every query from day one**. Retrofitting is painful.
2. **Implement row-level security at the database level**. Don't rely only on application code.
3. **Plan for tenant isolation in your caching strategy**.
4. **Monitor per-tenant to catch noisy neighbors early**.

The migration took months, but the operational benefits were worth it.`
  },
  {
    slug: "etl-pipelines-at-scale",
    title: "Building Reliable ETL Pipelines at Scale",
    date: "2024-10-05",
    excerpt: "How we built MLS data ingestion systems that process millions of records reliably.",
    content: `ETL (Extract, Transform, Load) pipelines are the backbone of data-driven applications. When you're dealing with real estate data from multiple MLS sources, reliability isn't optional—it's essential.

## The Challenge

MLS data comes in various formats (RETS, RESO Web API), with inconsistent schemas, varying update frequencies, and millions of records. We needed to:

- Ingest data from 100+ MLS sources
- Normalize to a single schema (RESO compliant)
- Handle updates, deletes, and corrections
- Keep downstream systems in sync

## Architecture

We built a pipeline with these components:

**1. Extractors**

Each MLS source has its own extractor that handles the specific API or data format. They output normalized records to a message queue.

**2. Transformation Layer**

Workers consume from the queue, apply business rules, validate data, and prepare for loading.

**3. Load and Sync**

Records are upserted to PostgreSQL with proper conflict handling. Change events are published for downstream consumers.

## Reliability Patterns

- **Idempotent operations**: Every step can be safely retried
- **Dead letter queues**: Failed records are captured for investigation
- **Checkpointing**: Resume from last successful position after failures
- **Monitoring and alerting**: Know immediately when something breaks

## Performance

With proper batching and parallel processing, we achieved:
- 10,000+ records/second throughput
- < 5 minute latency from source update to availability
- 99.9% uptime

The key was treating the pipeline as a distributed system and applying the same rigor you would to any production service.`
  }
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find(post => post.slug === slug);
}

export function getAllPosts(): Post[] {
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

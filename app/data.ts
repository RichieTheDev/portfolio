export const profile = {
  name: "Richie Momodu",
  role: "Senior DevOps Engineer",
  intro:
    "I run AWS and Kubernetes for fintech teams. Most recently that meant a payments wallet and a rewards platform: five EKS clusters, three AWS accounts and a PCI-DSS audit to pass.",
  location: "Lagos, Nigeria",
  availability: "Open to senior DevOps, SRE and platform roles. Remote or relocation. Available now.",
  email: "richiemomodu@gmail.com",
  github: "https://github.com/RichieTheDev",
  linkedin: "https://www.linkedin.com/in/richie-momodu/",
  siteUrl: "https://richiemomodu.vercel.app",
};

export const about = [
  "I've spent over six years looking after production AWS. These days I own the whole DevOps side for small fintech teams: Terraform, the clusters, the pipelines, monitoring, security reviews and the monthly bill.",
  "I like platforms that are boring to operate. That means everything in code, alerts that someone actually reads, and changes small enough to undo. Before I cut a cost or close a port, I check what depends on it.",
  "I started out building websites, so I still pick up frontend bugs when the team is stuck. I also write things down: runbooks, onboarding notes and plain-English summaries for people outside engineering.",
];

export const highlights = [
  "PCI-DSS certified payments platform",
  "AWS bill down 25%",
  "Production load 103% → 12%",
  "5 Kubernetes clusters upgraded, zero downtime",
];

export type Project = {
  slug: string;
  title: string;
  role: string;
  scope: string;
  summary: string;
  metric: { value: string; label: string };
  problem: string;
  actions: string[];
  stack: string[];
};

export const projects: Project[] = [
  {
    slug: "pci",
    title: "Got a card payments platform PCI-DSS certified",
    role: "Sole DevOps engineer",
    scope: "Payments wallet on AWS and EKS",
    summary:
      "Took production from a failing external scan to zero failed PCI-DSS controls, and led the certification with an external assessor (QSA).",
    metric: { value: "0", label: "failed PCI-DSS controls in production" },
    problem:
      "The wallet takes card payments, so it can't operate without PCI-DSS certification. The external vulnerability scan was failing and AWS Security Hub showed open findings in production.",
    actions: [
      "Fixed the failing ASV scan and set up quarterly scans with the assessor.",
      "Cleared every failed control in Security Hub and documented why the remaining ones don't apply, so the auditor had one clear record.",
      "Kept Kubernetes audit logging on the payment cluster and moved log retention to the 12 months PCI requires.",
      "Built a PCI-compliant release pipeline with secret, image and code scanning, plus an incident response playbook.",
    ],
    stack: ["PCI-DSS", "Security Hub", "GuardDuty", "CloudTrail", "AWS Config", "Trivy", "Gitleaks"],
  },
  {
    slug: "cost",
    title: "Cut the AWS bill by 25% without touching reliability",
    role: "Owned FinOps",
    scope: "3 AWS accounts, 5 EKS clusters",
    summary:
      "Brought monthly AWS spend down about 25% in four months. Nothing the products used was removed, and nothing PCI needs was cut.",
    metric: { value: "−25%", label: "monthly AWS spend" },
    problem:
      "Before launch, the platform was paying for a managed VPN, duplicate load balancers and database storage it never used.",
    actions: [
      "Replaced AWS Client VPN with self-hosted WireGuard over Transit Gateway. That one change saved about a third of the original monthly bill.",
      "Consolidated load balancers from 29 to 10, cut production database storage by 95% after checking real usage, and moved non-production nodes to Spot.",
      "Before removing anything, I confirmed 14 days with no traffic and made the change in Git so it could be reverted in minutes.",
      "Wrote up the savings I chose not to take and why, so nobody reopens a risky one later.",
    ],
    stack: ["Cost Explorer", "WireGuard", "Transit Gateway", "Spot", "RDS"],
  },
  {
    slug: "load",
    title: "Took production server load from 103% to 12%",
    role: "Investigation and fix",
    scope: "Live payments cluster",
    summary:
      "Production servers were overloaded and nobody knew why. I traced it to CI build jobs running inside the production cluster and moved them out.",
    metric: { value: "103% → 12%", label: "production node load" },
    problem:
      "The payments cluster was running past capacity with no customer growth to explain it. Autoscaling also wasn't kicking in when it should have.",
    actions: [
      "Found the CI runners scheduled on production nodes and moved them to their own node group, which now scales from 2 to 6 nodes and back on its own.",
      "Found a hidden fault that had switched off autoscaling for about 30 live services, and fixed it.",
      "Added autoscaling and disruption budgets to all 16 production wallet services, with memory requests recalibrated so scaling triggers at the right point.",
    ],
    stack: ["EKS", "HPA", "PDB", "Cluster Autoscaler", "GitLab Runners"],
  },
  {
    slug: "terraform",
    title: "Put a three-account AWS estate fully in code",
    role: "Designed and led",
    scope: "Production and non-production",
    summary:
      "Imported everything that had been built by hand into Terraform without recreating a single resource. The platform can now be rebuilt from Git.",
    metric: { value: "100%", label: "of the AWS estate in Terraform, zero drift" },
    problem:
      "Most of the AWS setup had been clicked together in the console. Nobody could say exactly what production looked like, and losing an account would have meant rebuilding from memory.",
    actions: [
      "Imported networking, Transit Gateway, DNS and certificates, security groups, IAM, Lambda, EKS, ECR, alarms, S3 and 90+ API Gateway REST APIs.",
      "Rebuilt the missing code for production load balancers that existed only in Terraform state, matching live config exactly.",
      "Gated plan and apply in GitLab CI, so infrastructure and IAM changes get reviewed like application code.",
      "Put Cloudflare DNS, rules and zone settings in Terraform too, with a scheduled job that flags any drift.",
    ],
    stack: ["Terraform", "AWS", "Transit Gateway", "GitLab CI", "Cloudflare"],
  },
  {
    slug: "gitops",
    title: "Upgraded five Kubernetes clusters with zero downtime",
    role: "Platform owner",
    scope: "5 EKS clusters, 135 applications",
    summary:
      "Moved every app and add-on under ArgoCD GitOps, then upgraded all five clusters to Kubernetes 1.37 on Amazon Linux 2023 with no customer impact.",
    metric: { value: "135", label: "apps deployed from Git" },
    problem:
      "Forty cluster add-ons had been installed by hand, so upgrades were risky and nobody was sure what was running where.",
    actions: [
      "Brought ingress, load balancer controller, autoscaler, secrets and logging under ArgoCD with no disruption.",
      "Set up AppProjects per environment, app-of-apps, self-heal and automatic retries across every application set.",
      "Found that deployment alerts had never reached Slack because of one broken template. Fixed it and proved it with a deliberate failed deploy.",
      "Upgraded clusters and node groups one at a time with disruption budgets in place, so services stayed up throughout.",
    ],
    stack: ["ArgoCD", "Helm", "EKS", "Kubernetes 1.37", "Amazon Linux 2023"],
  },
  {
    slug: "ci",
    title: "Cut build and deploy time to 4–6 minutes per service",
    role: "Owned CI/CD",
    scope: "16+ .NET microservices on GitLab",
    summary:
      "Builds used to crash or queue whenever several teams released at once. Each service now builds, scans and deploys in about four to six minutes, with no AWS keys stored in CI.",
    metric: { value: "4–6 min", label: "from merge to deployed" },
    problem:
      "Build jobs asked for zero CPU and memory, so the autoscaler never saw the real load. Releases stalled at the busiest times.",
    actions: [
      "Gave build jobs real resource requests and their own autoscaling node group.",
      "Added a custom SonarQube scanner image, S3 runner caches, BuildKit with ECR layer caching, and multi-arch images for Intel and ARM.",
      "Switched GitLab to OIDC for AWS access, so there are no long-lived keys in CI variables.",
      "Pipelines publish each service's OpenAPI spec to API Gateway, so API docs never go stale.",
    ],
    stack: ["GitLab CI", "OIDC", "Docker BuildKit", "ECR", "SonarQube", "CodeArtifact"],
  },
  {
    slug: "edge",
    title: "Made a payments platform pen-test ready",
    role: "Led security hardening",
    scope: "Payment and loyalty APIs",
    summary:
      "Closed every route around the firewall, so 96 APIs are only reachable through Cloudflare WAF, and took databases and internal tools off the public internet.",
    metric: { value: "96", label: "APIs locked behind the WAF" },
    problem:
      "APIs could be called directly, skipping the firewall, and databases, message queues and internal tools were reachable from the internet.",
    actions: [
      "Put every payment and loyalty API behind Cloudflare WAF and bot rules, and switched off the direct API Gateway endpoints.",
      "Moved databases, queues and internal tools into private subnets, reachable only over the VPN.",
      "Put development and staging behind Cloudflare Zero Trust Access.",
      "Rotated an exposed API key within the same sprint and patched servers ahead of the test.",
    ],
    stack: ["Cloudflare WAF", "Zero Trust", "API Gateway", "VPC", "WireGuard"],
  },
  {
    slug: "observability",
    title: "Built alerting that catches problems before customers do",
    role: "Designed and built",
    scope: "Two products, five clusters",
    summary:
      "Some alerts had been failing silently for over a year. Now every cluster reports to Slack, logs are kept for 12 months, and a watchdog fires if monitoring itself goes down.",
    metric: { value: "30+", label: "alert rules per cluster" },
    problem:
      "The team was finding out about failures from users. Several alert channels were broken, and the payment functions had no logs in Grafana at all.",
    actions: [
      "Built Prometheus federation across clusters, database alarms and Alertmanager routing to Slack, all managed through GitOps.",
      "Added the payment Lambda functions to Grafana with error alerts that fire within about a minute.",
      "Moved logs to encrypted S3 with 12-month retention and fixed a Loki storage failure in production.",
    ],
    stack: ["Prometheus", "Grafana", "Loki", "Alertmanager", "CloudWatch"],
  },
  {
    slug: "secrets",
    title: "Removed shared admin credentials from 16 services",
    role: "Designed and rolled out",
    scope: "Multi-tenant wallet",
    summary:
      "Moved 100+ secrets into AWS Secrets Manager and gave every service its own least-privilege database role. That made per-client data isolation possible.",
    metric: { value: "100+", label: "secrets moved to Secrets Manager" },
    problem:
      "Services shared one database superuser and read hand-made Kubernetes secrets. The wallet couldn't safely keep each client's data apart until that changed.",
    actions: [
      "Rolled out External Secrets Operator with cross-account IRSA, so pods read credentials straight from Secrets Manager.",
      "Rotated 16 services onto dedicated platform, payment and loyalty roles, which unblocked row-level security.",
      "Stopped production services from logging full request bodies that could contain personal data.",
    ],
    stack: ["Secrets Manager", "External Secrets", "IRSA", "PostgreSQL", "Row-level security"],
  },
  {
    slug: "identity",
    title: "Let a partner's customers sign in with accounts they already have",
    role: "Designed and built",
    scope: "Auth0 across dev, staging and production",
    summary:
      "Connected a travel partner's Keycloak to the wallet's Auth0, so their customers sign in once, and each client's users only ever see their own data.",
    metric: { value: "0", label: "new passwords for partner customers" },
    problem:
      "A partner's customers needed to pay in the wallet without creating a second account, and the platform had to keep each client's users separate.",
    actions: [
      "Federated the partner's Keycloak over OIDC and added the tenant ID to every token for row-level security to use.",
      "Set up passwordless email login, custom login domains and organisation-based multi-tenancy in all three environments.",
      "Added brute-force alerts through EventBridge and Lambda.",
    ],
    stack: ["Auth0", "Keycloak", "OIDC", "EventBridge", "Lambda"],
  },
];

export const skills = [
  { group: "AWS", items: "Organizations, EKS, EC2, Lambda, RDS and Aurora, S3, VPC, Transit Gateway, API Gateway, CloudFront, Route 53, SQS, SNS, KMS" },
  { group: "Infrastructure as code", items: "Terraform (modules, remote state, imports, drift detection), CloudFormation, AWS SAM" },
  { group: "Kubernetes", items: "EKS, Helm, ArgoCD and ApplicationSets, ingress-nginx, HPA and PDB, Cluster Autoscaler, External Secrets Operator" },
  { group: "Delivery", items: "GitLab CI/CD with self-hosted runners and OIDC, Docker BuildKit, ECR, CodeArtifact, SonarQube" },
  { group: "Edge", items: "Cloudflare DNS, WAF, bot management, Zero Trust Access, Workers and Pages" },
  { group: "Observability", items: "Prometheus, Grafana, Loki, Alertmanager, CloudWatch" },
  { group: "Security", items: "PCI-DSS, GuardDuty, Security Hub, Inspector, AWS Config, CloudTrail, IAM Identity Center, IRSA, Auth0, Trivy, Gitleaks" },
  { group: "Code and data", items: "Bash, Python, TypeScript, YAML, PostgreSQL, MySQL, Redis, RabbitMQ" },
];

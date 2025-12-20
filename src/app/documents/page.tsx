import { Flex, Heading, Text, Button } from '@once-ui-system/core';
import { documents, person } from '@/resources';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: documents.title,
        description: documents.description,
        openGraph: {
            title: documents.title,
            description: documents.description,
            type: 'website',
        },
    };
}

const documentsList = [
    {
        title: "Deployment Guide: Next.js Frontend, Node.js Backend & MongoDB",
        description: "Complete step-by-step guide to deploy Next.js frontend, Node.js backend, and MongoDB database with local and Atlas setup options.",
        type: "Guide",
        slug: "deployment-guide",
        category: "Documentation"
    },
    {
        title: "Kubernetes CI/CD Architecture",
        description: "Complete architecture documentation for Kubernetes CI/CD pipeline implementation",
        type: "PDF",
        size: "2.4 MB",
        downloadUrl: "/documents/Kubernetes_CICD_Architecture.pdf",
        category: "Architecture"
    },
    {
        title: "AWS Infrastructure Diagrams",
        description: "Comprehensive AWS infrastructure diagrams and network topology documentation",
        type: "PDF",
        size: "3.1 MB",
        downloadUrl: "/documents/AWS_Infrastructure_Diagrams.pdf",
        category: "Architecture"
    },
    {
        title: "Monitoring Setup Guide",
        description: "Step-by-step guide for Prometheus, Grafana, and ELK stack implementation",
        type: "PDF",
        size: "1.8 MB",
        downloadUrl: "/documents/Monitoring_Setup_Guide.pdf",
        category: "Documentation"
    },
    {
        title: "Terraform Modules Library",
        description: "Reusable Terraform modules for AWS infrastructure provisioning",
        type: "ZIP",
        size: "450 KB",
        downloadUrl: "/documents/Terraform_Modules_Library.zip",
        category: "Code"
    },
    {
        title: "Docker Best Practices Guide",
        description: "Comprehensive guide for Docker containerization and optimization strategies",
        type: "PDF",
        size: "1.2 MB",
        downloadUrl: "/documents/Docker_Best_Practices.pdf",
        category: "Documentation"
    },
    {
        title: "Ansible Playbooks Collection",
        description: "Production-ready Ansible playbooks for server configuration and deployment",
        type: "ZIP",
        size: "680 KB",
        downloadUrl: "/documents/Ansible_Playbooks.zip",
        category: "Code"
    },
    {
        title: "Cost Optimization Report",
        description: "AWS cost optimization analysis and recommendations with implementation results",
        type: "PDF",
        size: "950 KB",
        downloadUrl: "/documents/AWS_Cost_Optimization_Report.pdf",
        category: "Reports"
    },
    {
        title: "Security Compliance Checklist",
        description: "DevOps security checklist and compliance documentation for production environments",
        type: "PDF",
        size: "720 KB",
        downloadUrl: "/documents/Security_Compliance_Checklist.pdf",
        category: "Documentation"
    }
];

export default function Documents() {
    return (
        <Flex
            fillWidth maxWidth="m"
            direction="column"
            flex={1}
            style={{ alignItems: 'center' }}>
            <Flex
                fillWidth
                direction="column"
                paddingY="l" gap="m">
                <Flex
                    direction="column"
                    fillWidth maxWidth="s"
                    gap="m">
                    <Heading
                        variant="display-strong-s">
                        Project Documents
                    </Heading>
                    <Text
                        variant="body-default-l"
                        onBackground="neutral-weak">
                        Technical documentation, architecture diagrams, and code repositories from my DevOps projects and implementations.
                    </Text>
                </Flex>

                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '1rem',
                        width: '100%'
                    }}>
                    {documentsList.map((doc, index) => (
                        <Flex
                            key={index}
                            direction="column"
                            padding="l"
                            gap="m"
                            border="neutral-medium"
                            borderStyle="solid"
                            radius="m"
                            background="surface">
                            <Flex
                                direction="column"
                                gap="xs">
                                <Flex
                                    style={{ justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                    <Heading
                                        variant="heading-strong-s">
                                        {doc.title}
                                    </Heading>
                                    <Text
                                        variant="label-default-s"
                                        onBackground="accent-strong"
                                        padding="xs"
                                        style={{ 
                                            borderRadius: '4px',
                                            backgroundColor: 'var(--accent-alpha-weak)'
                                        }}>
                                        {doc.category}
                                    </Text>
                                </Flex>
                                <Text
                                    variant="body-default-m"
                                    onBackground="neutral-weak">
                                    {doc.description}
                                </Text>
                            </Flex>
                            
                            <Flex
                                vertical="center"
                                horizontal="between">
                                <Flex
                                    gap="s"
                                    vertical="center">
                                    <Text
                                        variant="label-default-s"
                                        onBackground="neutral-medium">
                                        {doc.type}
                                    </Text>
                                    {doc.size && (
                                        <>
                                            <Text
                                                variant="label-default-s"
                                                onBackground="neutral-weak">
                                                •
                                            </Text>
                                            <Text
                                                variant="label-default-s"
                                                onBackground="neutral-medium">
                                                {doc.size}
                                            </Text>
                                        </>
                                    )}
                                </Flex>
                                
                                <Flex gap="xs">
                                    {doc.slug === 'deployment-guide' ? (
                                        <>
                                            <Button
                                                href="/documents/deployment-guide"
                                                variant="primary"
                                                size="s">
                                                View
                                            </Button>
                                            <Button
                                                href="/api/download/nextjs-nodejs-mongodb-deployment"
                                                variant="secondary"
                                                size="s">
                                                Download
                                            </Button>
                                        </>
                                    ) : doc.downloadUrl ? (
                                        <Button
                                            href={doc.downloadUrl}
                                            variant="secondary"
                                            size="s">
                                            Download
                                        </Button>
                                    ) : null}
                                </Flex>
                            </Flex>
                        </Flex>
                    ))}
                </div>

                <Flex
                    direction="column"
                    gap="m"
                    padding="l"
                    border="neutral-medium"
                    borderStyle="solid"
                    radius="m"
                    background="surface">
                    <Heading
                        variant="heading-strong-s">
                        Need Source Code or Additional Documentation?
                    </Heading>
                    <Text
                        variant="body-default-m"
                        onBackground="neutral-weak">
                        Looking for specific implementation details, source code, or custom documentation? I can provide additional technical materials upon request.
                    </Text>
                    <Button
                        href={`mailto:${person.email}`}
                        variant="primary"
                        size="m">
                        Contact Me
                    </Button>
                </Flex>
            </Flex>
        </Flex>
    );
}
import { SectionHeading } from "@/components/ui/SectionHeading";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <SectionHeading
      as="h1"
      eyebrow={eyebrow}
      title={title}
      description={description}
    />
  );
}

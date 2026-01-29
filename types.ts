export interface NavItem {
  label: string;
  href: string;
}

export interface Metric {
  value: string;
  label: string;
  subtext?: string;
}

export interface ProjectCard {
  title: string;
  category: string;
  description: string;
  imageUrl: string;
}

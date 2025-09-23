export interface CardProps {
  title: string;
  content: string;
}

export interface ButtonProps {
  size: 'small' | 'medium' | 'large';
  shape: 'rounded' | 'square';
  children: React.ReactNode;
  onClick: () => void;
}

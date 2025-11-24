import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  children: React.ReactNode;
}

const Container = ({ children, className }: Props) => {
  return (
    <div className={cn("px-4 sm:px-8 max-w-7xl mx-auto", className)}>
      {children}
    </div>
  );
};
export default Container;

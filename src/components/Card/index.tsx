interface CardTitleProps {
  children: React.ReactNode;
}

export const CardTitle = ({ children }: CardTitleProps) => {
  return <h2 className="text-[16px] font-medium text-gray-900 mb-1 flex justify-between items-center">{children}</h2>
}

interface CardDescriptionProps {
  children: React.ReactNode;
}

export const CardDescription = ({ children }: CardDescriptionProps) => {
  return <p className="text-sm text-gray-500 mb-3">{children}</p>
}

interface CardLinksProps {
  children: React.ReactNode;
}

export const CardLinks = ({ children }: CardLinksProps) => {
  return <div className="flex flex-wrap gap-2 mt-4">{children}</div>
}

interface CardLinkProps {
  children: React.ReactNode;
  href: string;
}

export const CardLink = ({ children, href }: CardLinkProps) => {
  return <a
    href={href}
    className="flex tems-center justify-center px-3 py-2 text-sm font-medium rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-colors"
    target="_blank"
    rel="noopener noreferrer"
  >{children}</a>
}

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className }: CardProps) => {
  return <div className={`bg-white rounded-lg border border-gray-200 p-4 hover:border-gray-300 transition-colors ${className}`}>
    {children}
  </div>
};

export default Card;

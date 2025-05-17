import classNames from "classnames";

export const CardTitle = ({ children }: { children: React.ReactNode }) => {
  return <h2 className="text-[16px] font-medium text-gray-900 mb-3 flex justify-between items-center">{children}</h2>
}

interface CardLinksProps {
  children: React.ReactNode;
}

export const CardLinks = ({ children }: CardLinksProps) => {
  return <div className="flex flex-wrap gap-2">{children}</div>
}

interface CardLinkProps {
  children: React.ReactNode;
  href: string;
}

export const CardLink = ({ children, href }: CardLinkProps) => {
  return <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={classNames("flex flex-1 items-center justify-center px-3 py-2 text-sm font-medium rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-colors")}
  >{children}</a>
}

interface CardProps {
  children: React.ReactNode;
}

const Card = ({ children }: CardProps) => {
  return <div className="bg-white rounded-lg border border-gray-200 p-4 hover:border-gray-300 transition-colors">
    {children}
  </div>
};

export default Card;

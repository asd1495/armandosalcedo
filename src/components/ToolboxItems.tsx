import { twMerge } from "tailwind-merge";
import { Icons } from "./Icons";
import JavascriptIcon from '@/assets/icons/square-js.svg';
import HTMLIcon from '@/assets/icons/html5.svg';
import CssIcon from '@/assets/icons/css3.svg';
import GithubIcon from '@/assets/icons/github.svg';
import ReactIcon from '@/assets/icons/react.svg';
import GitIcon from '@/assets/icons/git.svg';
import NpmLogo from '@/assets/icons/npm-logo-red.svg';
import JavaLogo from '@/assets/icons/java.svg';
import SqlLogo from '@/assets/icons/sql.svg';
import LinuxLogo from '@/assets/icons/linux.svg';
import { Fragment } from "react";

export const ToolboxItems = ({ items, className, itemsWrapperClassname }: {
    items: {
        title: string;
        iconType: React.ElementType;
    }[];
    className?: string;
    itemsWrapperClassname?: string;
}) => {
    return (
            <div className={twMerge("flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]", className)}>
                <div 
                    className={twMerge(
                        "flex flex-none py-0.5 gap-6 pr-6", itemsWrapperClassname
                    )}
                >
                {[...new Array(2)].fill(0).map((_, index) => (
                    <Fragment key={index}>
                        {items.map(item => (
                            <div key={item.title} 
                                className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg">
                                <Icons component={item.iconType} />
                                <span className="font-semibold">{item.title}</span>
                            </div>
                        ))}
                    </Fragment>
                ))}
                </div>
            </div>
    )
}

export const toolboxItems = [
    {
      title: 'JavaScript',
      iconType: JavascriptIcon,
    },
    {
      title: 'React',
      iconType: ReactIcon,
    },
    {
      title: 'Git',
      iconType: GitIcon,
    },
    {
      title: 'npm',
      iconType: NpmLogo,
    },
    {
      title: 'Java',
      iconType: JavaLogo,
    },
    {
      title: 'SQL',
      iconType: SqlLogo,
    },
    {
      title: 'Linux',
      iconType: LinuxLogo,
    },
    {
        title: 'HTML',
        iconType: HTMLIcon,
      },
      {
        title: 'CSS',
        iconType: CssIcon,
      },
  ];
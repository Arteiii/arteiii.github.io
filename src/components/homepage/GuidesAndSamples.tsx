import React from "react";
import Link from "@docusaurus/Link";
import {
  AppsAddInRegular,
  ArrowRightFilled,
  DocumentRegular,
  OpenRegular,
  RecordRegular,
  VideoRegular,
  WindowDevToolsRegular,
  CodePyRectangle16Regular,
} from "@fluentui/react-icons";
import clsx from "clsx";
import { ChevronRight, GitHub } from "react-feather";

interface Guide {
  title: string;
  icon: any;
  text: string;
  link: string;
}

const guides: Guide[] = [
  {
    title: "Start Windows Kernel Development",
    icon: WindowDevToolsRegular,
    text: "Create a kernel driver, learn kernel debugging basics.",
    link: "/docs/windows/kernel/",
  },
  {
    title: "Python",
    icon: CodePyRectangle16Regular,
    text: "Explore basic Python functionality.",
    link: "/docs/python",
  },
];

interface Sample {
  title: string;
  platform?: string;
  source?: string;
  blog?: string;
  demo?: string;
  buttonlabel?: string;
}

const samples: Sample[] = [
  {
    title: "zenity",
    platform: "Rust, CLI",
    source: "https://github.com/Arteiii/zenity",
    blog: 'https://docs.rs/zenity/latest/zenity/',
    demo: 'https://crates.io/crates/zenity',
  },
  {
    title: "Windows Sample Driver",
    platform: "Windows Kernel",
    blog: "https://arteiii.github.io/docs/windows/kernel/",
    source: "https://github.com/Arteiii/simpleWinDriver",
  },
  {
    title: "RegistryHelper",
    platform: "Windows, Modern C++",
    source: "https://github.com/Arteiii/RegistryHelper",
    blog: 'https://learn.microsoft.com/en-us/archive/msdn-magazine/authors/giovanni_dicanio',
    // demo: 'no demooo????',
  },
];

function Guide({ title, text, icon: Icon, link }: (typeof guides)[0]) {
  return (
    <Link
      to={link}
      className="group flex cursor-pointer items-start gap-2 rounded-lg border-2 border-transparent p-3 text-inherit transition-colors hover:border-primary hover:text-primary"
    >
      <Icon className="h-6 w-6" />

      <div className="flex flex-col">
        <h4 className="mb-1 font-semibold">{title}</h4>
        <p className="mb-0 text-sm text-text-400">{text}</p>
      </div>

      <ChevronRight className="ml-auto h-5 w-5 self-center opacity-0 transition-opacity group-hover:opacity-100" />
    </Link>
  );
}

export function Sample({ title, platform, blog, source, demo, buttonlabel = "Clone" }: Sample) {
  return (
    <div className="group flex cursor-pointer items-center justify-between rounded-lg border-2 border-transparent p-3 text-text-400/60 transition-colors hover:border-primary hover:text-primary">
      <div className="flex flex-col">
        <h4 className="mb-1 text-black group-hover:text-primary dark:text-white">
          {title}
        </h4>
        <div className="text-sm text-text-400">{platform}</div>
      </div>

      <div className="flex items-center gap-2.5">
        {blog && (
          <Link to={blog} className="text-inherit" aria-label="Open Blog">
            <DocumentRegular className="h-5 w-5" />
          </Link>
        )}

        {demo && (
          <Link to={demo} className="text-inherit" aria-label="Open Demo">
            <OpenRegular className="h-5 w-5" />
          </Link>
        )}

        {source && (
          <Link
            to={source}
            className="flex items-center gap-1 rounded-lg py-1 px-3 text-inherit transition-colors group-hover:bg-primary group-hover:text-white"
            aria-label="Open Repositorie"
          >
            <GitHub className="h-4 w-4" />
            <span className="font-semibold">{buttonlabel}</span>
          </Link>
        )}
      </div>
    </div>
  );
}

export function GuidesAndSamples() {
  return (
    <section className="no-underline-links mx-auto flex w-full max-w-5xl flex-col p-4 md:flex-row md:gap-0">
      <div className="flex-1">
        <div className="mb-8 flex items-center justify-between">
          <h3 className="m-0">Docs & Notes</h3>

          <Link to="/docs" className="font-jakarta text-sm font-semibold">
            View more <ArrowRightFilled className="ml-1" />
          </Link>
        </div>

        <div className="flex flex-col gap-4">
          {guides.map((guide) => (
            <Guide {...guide} key={guide.title} />
          ))}
        </div>
      </div>

      <div
        className={clsx(
          "mx-8 block flex-shrink-0 bg-gradient-to-b from-transparent via-secondary-700 to-transparent",
          "hidden w-px md:block"
        )}
      />

      <div className="w-full md:max-w-sm">
        <div className="mb-8 flex items-center justify-between">
          <h3 className="m-0">Repositories</h3>

          <Link
            to="https://github.com/Arteiii?tab=repositories"
            className="font-jakarta text-sm font-semibold"
          >
            All <ArrowRightFilled className="ml-1" />
          </Link>
        </div>

        <div className="flex flex-col gap-4">
          {samples.map((sample) => (
            <Sample {...sample} key={sample.title} />
          ))}
        </div>
      </div>
    </section>
  );
}

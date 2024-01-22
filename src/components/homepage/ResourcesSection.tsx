import Link from '@docusaurus/Link';
import React, { useState } from 'react';
import clsx from 'clsx';
import axios from 'axios';

import {
  ArrowRightFilled,
  ChevronLeftRegular,
  ChevronRightRegular,
} from '@fluentui/react-icons';

interface Resource {
  youtubeId: string;
  title: string;
}

const ALL_RESOURCES: Resource[] = [
  {
    youtubeId: 'ppJWQLvR15c',
    title: 'Fortnite Ep 2',
  },
  {
    youtubeId: 'b0sdJfhui00',
    title: 'XDefiant Beta was fun',
  },
  {
    youtubeId: '3j63CkHwytI',
    title: 'Rainbow Six Siege EP 1',
  },
  {
    youtubeId: 'plNRcHh17dc',
    title: 'Rainbow Six Siege EP 2',
  },
  {
    youtubeId: '48hjHs-gENI',
    title: 'Fortnite Ep 1',
  },
  {
    youtubeId: 'gvhFTAT-Ewc',
    title: 'Apex Legends',
  },
];

function Resource({
  youtubeId,
  title,
}: Resource) {
  const [isPreviewVisible, setIsPreviewVisible] = useState<boolean>(true);


  const handlePreviewClick = () => {
    setIsPreviewVisible(false);
  };

  return (
    <Link
      className="fade-in group flex flex-col justify-between"
      key={title}
      href={`https://youtu.be/${youtubeId}`}
    >
      <div>
        <div className="mb-3 overflow-hidden rounded-lg">
          <img
            src={`https://img.youtube.com/vi/${youtubeId}/sddefault.jpg`}
            alt={title}
            loading="lazy"
            className="aspect-video h-full w-full object-cover transition-transform group-hover:scale-110"
          />
        </div>
        <h3 className="font-semibold text-black group-hover:text-primary dark:text-white dark:group-hover:text-primary-100 lg:text-xl">
          {title}
        </h3>

      </div>
    </Link>
  );
}

export default function ResourcesSection() {
  const [page, setPage] = useState(1);
  const [activeType, setActiveType] = useState<'all'>('all');

  const resources =
    activeType === 'all'
      ? ALL_RESOURCES
      : ALL_RESOURCES;

  const currentResources = resources.slice((page - 1) * 3, page * 3);

  const pages = Math.ceil(resources.length / 3);

  const nextPage = () => {
    if (page < pages) {
      setPage(page + 1);
    }
  };

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <section className="no-underline-links my-20 px-6 mb-50">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center justify-between">
          <div>
            <span className="dyte-badge">RESOURCES</span>
            <h2 className="mb-6 text-4xl">Want to know more?</h2>
          </div>
          <Link
            to="https://www.youtube.com/channel/UCaffwboFFfcohAehyj43pQQ"
            className="font-jakarta text-sm font-semibold text-primary"
          >
            All Videos <ArrowRightFilled className="ml-1" />
          </Link>
        </div>


        <div className="relative flex flex-col">
          <div className="no-underline-links grid grid-cols-3 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {currentResources.map((resource, idx) => {
              return <Resource {...resource} key={idx} />;
            })}
          </div>

          <div className="my-10 ml-auto flex items-center justify-center md:my-0">
            <button
              onClick={prevPage}
              className="top-1/2 -left-14 rounded-lg bg-transparent p-1 hover:bg-secondary-800 md:absolute md:-translate-y-1/2"
            >
              <ChevronLeftRegular className="h-6 w-6" />
            </button>

            <button
              onClick={nextPage}
              className="top-1/2 -right-14 rounded-lg bg-transparent p-1 hover:bg-secondary-800 md:absolute md:-translate-y-1/2"
            >
              <ChevronRightRegular className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

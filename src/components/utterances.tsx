import * as React from 'react';
import { createRef, useEffect } from 'react';

const src = 'https://utteranc.es/client.js';

export interface IUtterancesProps {
  repo: string;
}

const Utterances: React.FC<IUtterancesProps> = React.memo(
  ({ repo }: IUtterancesProps) => {
    const containerRef = createRef<HTMLDivElement>();

    useEffect(() => {
      const utterances = document.createElement('script');

      const attributes = {
        src,
        repo,
        'issue-term': 'pathname',
        label: 'comment',
        theme: 'github-light',
        crossOrigin: 'anonymous',
        async: 'true',
      };

      Object.entries(attributes).forEach(([key, value]) => {
        utterances.setAttribute(key, value);
      });
      if (containerRef && containerRef.current) {
        containerRef.current.appendChild(utterances);
      }
    }, [containerRef, repo]);

    return <div ref={containerRef} />;
  }
);

Utterances.displayName = 'Utterances';

export default Utterances;

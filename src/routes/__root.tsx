import { Outlet, createRootRoute } from '@tanstack/react-router';
import { useEffect } from 'react';

export const Route = createRootRoute({
  component: RootDocument,
});

function RootDocument() {
  useEffect(() => {
    const styles = [
      '/home/styles/style_15.css',
      '/home/styles/style_04.css',
      '/home/styles/style_06.css',
      '/home/styles/style_11.css',
      '/home/styles/style_14.css',
      '/home/styles/style_09.css',
      '/home/styles/style_12.css',
      '/home/styles/style_13.css',
      '/home/styles/style_10.css',
      '/home/styles/style_01.css',
      '/home/styles/style_05.css',
      '/home/styles/style_07.css',
      '/home/styles/style_08.css',
      '/home/styles/style_02.css',
      '/home/styles/style_03.css',
      '/home/styles/merged_styles.css',
    ];
    styles.forEach((href) => {
      if (!document.querySelector(`link[href="${href}"]`)) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        document.head.appendChild(link);
      }
    });
  }, []);

  return <Outlet />;
}

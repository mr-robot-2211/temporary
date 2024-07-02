import '@mantine/core/styles.css';
import React from 'react';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { theme } from '../theme';

export const metadata = {
  title: 'sovesa ',
  description: 'I am using Mantine with Next.js!',
};

import './background.css';
import { SessionProvider } from 'next-auth/react';

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
      <div className="background main-content">
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </div>
      </SessionProvider>
      </body>
    </html>
  );
}

import { ThemeProvider } from 'next-themes';
import { Toolbar } from 'basehub/next-toolbar';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider enableSystem attribute="class" defaultTheme="system">
      {children}
    </ThemeProvider>
  );
}

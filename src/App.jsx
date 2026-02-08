import { ThemeProvider } from '@/components/theme-provider'

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <button className="bg-primary rounded-lg text-primary-foreground">
        Comprar
      </button>
    </ThemeProvider>
  )
}

export default App

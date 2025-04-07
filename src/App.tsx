import { ThemeProvider } from "./context/theme"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import CityPage from "./pages/city-page"
import WeatherDashboard from "./pages/weather-dashboard"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient();

function App() {
  return (
    <div >
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <ThemeProvider defaultTheme="dark">
            <Layout>
              <Routes>
                <Route path="/" element={<WeatherDashboard />} />
                <Route path="/city/:cityname" element={<CityPage />} />
              </Routes>
            </Layout>
          </ThemeProvider>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>

    </div>
  )
}

export default App

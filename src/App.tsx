import './App.css'
import { WagmiConfig, createClient, configureChains, defaultChains } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { ReservoirKitProvider, darkTheme } from '@reservoir0x/reservoir-kit-ui'
import Bundle from './components/bundle';


function App() {
  const { provider, webSocketProvider } = configureChains(defaultChains, [ publicProvider() ])
  const wagmiClient = createClient({ provider, webSocketProvider })
   
  const theme = darkTheme({
    headlineFont: "Sans Serif",
    font: "Serif",
    primaryColor: "#323aa8",
    primaryHoverColor: "#252ea5",
  })

  return (
    <h1>
      API limit reached. Maintance mode.
    </h1>

  )
}

export default App

/*
    <ReservoirKitProvider 
      options={{ 
        apiBase: 'https://api.reservoir.tools', 
        apiKey: import.meta.env.VITE_RESERVOIR_API_KEY 
      }}
      theme={theme}
    >

      <WagmiConfig client={wagmiClient}>
        
        <Bundle/>
      </WagmiConfig>
    </ReservoirKitProvider>
*/
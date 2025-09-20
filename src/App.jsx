import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import FlamboyantResidence from './page/FlamboyantResidence'
import CompanyInfo from './page/CompanyInfo'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FlamboyantResidence />} />
        <Route path="info" element={<CompanyInfo />} />
      </Routes>
    </Router>
  )
}

export default App
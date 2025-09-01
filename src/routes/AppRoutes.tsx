import { Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/home/HomePage"
import { FeaturePage } from "../pages/features/FeaturesPage"
import { FaqPage } from "../pages/faq/FaqPage"

export const AppRoutes = () => {
  return(
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/features" element={<FeaturePage/>}/>
      <Route path="/faq" element={<FaqPage/>}/>
    </Routes>
  )
}
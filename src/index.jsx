import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './landing_page/home/HomePage'
import AdminPanel from './landing_page/adminPanel/AdminPanel'
import LeaderBoard from './landing_page/leaderBoard/LeadderBoard'
import About from './landing_page/about/hero'
import Support from './landing_page/support/Hero'
import Footer from './landing_page/Footer'
import Navbar from './landing_page/Navbar'
import NotFound from './landing_page/NotFound'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<AdminPanel />} />
      <Route path="/leaderboard" element={<LeaderBoard />} />
      <Route path="/about" element={<About />} />
      <Route path="/support" element={<Support />} />
      <Route path="/footer" element={<Footer />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer/>
  </BrowserRouter>
)

// import React from 'react'
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import {Box} from '@mui/material';
import Feed from './components/Feed';
import NavBar from './components/NavBar';
import SearchFeed from './components/SearchFeed';
import VideoDetail from './components/VideoDetail';
import ChannelDetail from './components/channelDetail';
const App = () => {
  return (
    <BrowserRouter>
    <Box sx={{backgroundColor:'black'}}>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Feed/>}></Route>
        <Route path='/video/:id' element={<VideoDetail/>}></Route>
        <Route path='/channel/:id' element={<ChannelDetail/>}></Route>
        <Route path='/search/:searchTerm' element={<SearchFeed/>}></Route>
      </Routes>
    </Box>
    </BrowserRouter>
  )
}

export default App
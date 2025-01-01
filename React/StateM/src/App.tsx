import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Gallery from './components/Gallery'
import './App.css'
import ChatApp from './components/ChatApp';
import InteractiveForm from './components/InteractiveForm'
import BucketList from './components/BucketList';

const App = () => {
    return (
        <main>
            <Router>
                <Routes>
                    <Route path="/Gallery" element={<Gallery />} />
                    <Route path="/ChatApp" element={<ChatApp />} />
                    <Route path='/InteractiveForm' element={<InteractiveForm />} />
                    <Route path='/BucketList' element={<BucketList />} />
                </Routes>
            </Router>
        </main>
    )
}

export default App;
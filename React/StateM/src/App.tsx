import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Gallery from './components/Gallery'
import './App.css'
import ChatApp from './components/ChatApp';
import InteractiveForm from './components/InteractiveForm'
import BucketList from './components/BucketList';
import Click from './components/Click';
import AlertPlay from './components/AlertPlay';
import EventProps from './components/EventProps';
import Clock from './components/Clock';
import Form from './components/Form';

const App = () => {
    return (
        <main>
            <Router>
                <Routes>
                    <Route path="/Gallery" element={<Gallery />} />
                    <Route path="/ChatApp" element={<ChatApp />} />
                    <Route path='/InteractiveForm' element={<InteractiveForm />} />
                    <Route path='/BucketList' element={<BucketList />} />
                    <Route path='/Click' element={<Click />} />
                    <Route path='/AlertPlay' element={<AlertPlay />} />
                    <Route path='EventProps' element={<EventProps />} />
                    <Route path='/Clock' element={<Clock />} />
                    <Route path='/Form' element={<Form />} />
                </Routes>
            </Router>
        </main>
    )
}

export default App;
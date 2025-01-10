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
import TrafficLight from './components/TrafficLight';
import Pointer from './components/Pointer';
import ArrayList from './components/ArrayList';
import CircleMover from './components/CircleMover';
import CounterList from './components/CounterList';
import Onslider from './components/Onslider';

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
                    <Route path='/TrafficLight' element={<TrafficLight />} />
                    <Route path='/Pointer' element={<Pointer />} />
                    <Route path='/ArrayList' element={<ArrayList />} />
                    <Route path='/CircleMover' element={<CircleMover />} />
                    <Route path='/CounterList' element={<CounterList />} />
                    <Route path='/Onslider' element={<Onslider />} />
                </Routes>
            </Router>
        </main>
    )
}

export default App;

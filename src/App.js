import Folder from './components/Folder'
import File from './components/File'


function App() {
  return (
    <div className="App">
      <Folder name='Desktop'>
        <Folder name='Documents'>
          <File name='dog.jpg'></File>
          <File name='cat.jpg'></File>
        </Folder>
        <Folder name='Music'></Folder>
        <File name='dami.jpg'></File>
      </Folder>
    </div>
  );
}

export default App;

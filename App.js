import logo from './logo.svg';
import './App.css';
import Get from './get';
import Post from './post';
import Comment from './comment';
import Add_Edit from './add_edit';

function App() {
  return (
    <div className="App">
      <Get></Get>
      <Post></Post>
      <Comment></Comment>
      <Add_Edit></Add_Edit>
    </div>
  );
}

export default App;

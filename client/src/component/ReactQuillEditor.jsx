// QuillEditor.js
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import the styles
import 'react-quill/dist/quill.bubble.css'; // Import the bubble theme for a simpler toolbar
import 'react-quill/dist/quill.core.css'; // Import the core styles

const ReactQuillEditor = ({ onChange }) => {

  return (
    <ReactQuill
      theme="bubble"
      onChange={onChange}
    />
  );
};

export default ReactQuillEditor;

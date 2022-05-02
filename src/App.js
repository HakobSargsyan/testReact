import React from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const App = () => (
    <Editor
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
        wrapperStyle={{}}
        editorStyle={{}}
        toolbarStyle={{}}
    />
);

export default App;

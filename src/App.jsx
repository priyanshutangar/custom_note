import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import AddNote from './components/AddNote';
import NotesList from './components/NotesList';
import './App.css';

function App() {
  // Used useState to control the active tab for simple UI switching and to force re-render NotesList after a new note is added.
  const [activeTab, setActiveTab] = useState('add');
  const [noteListKey, setNoteListKey] = useState(0);

  const handleNoteAdded = () => {
    // Incremented noteListKey to force NotesList to re-mount and re-fetch from localStorage after a new note is added.
    setNoteListKey(prev => prev + 1);
    setActiveTab('view');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Notes Hub
          </h1>
          <p className="text-center mb-12 text-gray-600">Capture your thoughts, organize your ideas</p>
          
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            <div className="flex p-2 gap-2 bg-gray-50">
              <button
                className={`flex-1 py-4 px-6 text-lg font-medium rounded-xl transition-all duration-300 ${
                  activeTab === 'add'
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
                onClick={() => setActiveTab('add')}
              >
                Create Note
              </button>
              <button
                className={`flex-1 py-4 px-6 text-lg font-medium rounded-xl transition-all duration-300 ${
                  activeTab === 'view'
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
                onClick={() => setActiveTab('view')}
              >
                My Notes
              </button>
            </div>
            
            <div className="p-8">
              {activeTab === 'add' ? (
                <AddNote onNoteAdded={handleNoteAdded} />
              ) : (
                <NotesList key={noteListKey} />
              )}
            </div>
          </div>
        </div>
      </div>
      <Toaster 
        position="bottom-right"
        toastOptions={{
          style: {
            background: 'rgba(255, 255, 255, 0.95)',
            color: '#4B5563',
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            border: '1px solid rgba(59, 130, 246, 0.1)',
          },
        }}
      />
    </div>
  );
}

export default App;

import { useState } from 'react';
import { saveNotes, loadNotes } from '../utils/storage';
import toast from 'react-hot-toast';

function AddNote({ onNoteAdded }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isSaving, setIsSaving] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSaving(true);

    const newNote = {
      id: Date.now(),
      title,
      content,
      createdAt: new Date().toISOString(),
    };

    const existingNotes = loadNotes();
    const success = saveNotes([newNote, ...existingNotes]);

    if (success) {
      toast.success('Note saved successfully!');
      setTitle('');
      setContent('');
      onNoteAdded();
    } else {
      toast.error('Failed to save note');
    }

    setIsSaving(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="title" className="block text-lg font-medium text-gray-700 mb-2">
          Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500/20 transition duration-300 text-gray-900 placeholder-gray-400"
          placeholder="Enter note title..."
          required
        />
      </div>
      <div>
        <label htmlFor="content" className="block text-lg font-medium text-gray-700 mb-2">
          Content
        </label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={6}
          className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500/20 transition duration-300 text-gray-900 placeholder-gray-400"
          placeholder="Write your note here..."
          required
        />
      </div>
      <button
        type="submit"
        disabled={isSaving}
        className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-4 px-6 rounded-xl text-lg font-medium hover:from-blue-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-0.5 active:translate-y-0"
      >
        {isSaving ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Saving...
          </span>
        ) : (
          'Save Note'
        )}
      </button>
    </form>
  );
}

export default AddNote
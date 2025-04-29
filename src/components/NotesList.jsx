import { useEffect, useState } from 'react';
import { loadNotes } from '../utils/storage';

function NotesList() {
  const [notes, setNotes] = useState([]);
  // used useState to store the notes in a local state so that they can be rendered and updated reactively.

  useEffect(() => {
    setNotes(loadNotes());
  }, []);
  //used useEffect with an empty dependency array so that notes load only once when the component mounts.


  return (
    <div className="space-y-6">
      {notes.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-2xl font-medium text-gray-700">Your notes will appear here</p>
          <p className="text-gray-500 mt-2">Start by creating your first note!</p>
        </div>
      ) : (
        notes.map((note) => (
          <div
            key={note.id}
            className="group bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {note.title}
                </h3>
                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  {new Date(note.createdAt).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </span>
              </div>
              <p className="text-gray-600 whitespace-pre-wrap">{note.content}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default NotesList;
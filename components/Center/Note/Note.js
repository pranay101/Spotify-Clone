import { XIcon } from "@heroicons/react/outline";
import { useState } from "react";

function Note() {
  const [showNote, setShowNote] = useState(true);
  const closeNote = () =>{
      setShowNote(false)
  }
  return (
    <div>
      {showNote ? (
        <div className="h-25 px-8 py-4 bg-gray-800 text-white absolute bottom-32 right-5">
          <XIcon onClick={closeNote} className="w-5 h-5 absolute top-3 right-3 hover:scale-125" />
          <h2 className="text-lg mt-5">
            The play music function requires Spotify Premium Account
          </h2>
          <p className="text-sm text-gray-400">
            Without one you can list out your playlist and songs only....bad
            luck
          </p>
        </div>
      ) : null}
    </div>
  );
}

export default Note;

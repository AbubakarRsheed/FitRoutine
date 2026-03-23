import { createPortal } from "react-dom";

type PropsType = {
  isOpen: boolean;
  onClose: () => void;
} & (
  | {
      channel: "youtube";
      videoId: string; // Yahan aap sirf videoId daalein ya pura URL bhi handle ho jayega
    }
  | {
      channel?: "custom";
      src: string;
    }
);

export default function VideoModal({ isOpen, onClose, ...props }: PropsType) {
  if (!isOpen) return null;

  // Agar user pura link de raha hai, to ID extract kar lein, warna simple ID use karein
  const getYoutubeSrc = () => {
    if (props.channel !== "youtube") return "";
    // Agar pura URL hai to wahi return kare, warna default format
    return props.videoId.startsWith("http") 
      ? props.videoId 
      : `https://www.youtube.com/embed/${props.videoId}`;
  };

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-4">
      <div className="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden">
        <button
          onClick={onClose}
          className="absolute -top-2 -right-4 z-50 text-5xl text-white cursor-pointer hover:text-gray-300"
        >
          <span className="sr-only">Close modal</span>
          &times;
        </button>

        {props.channel === "youtube" ? (
          <iframe
            width="100%"
            height="500"
            src={getYoutubeSrc()}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <video
            width="100%"
            height="500"
            controls
            autoPlay
            className="w-full h-auto"
          >
            <source src={props.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    </div>,
    document.body,
  );
}
import "@google/model-viewer";
import "./ModelViewer.css";

export default function ModelViewer({ src, alt }) {
  return (
    <div className="modelViewerContainer">
      <model-viewer
        src={src}
        alt={alt}
        camera-controls
        auto-rotate
        shadow-intensity="1"
        exposure="1"
        interaction-prompt="auto"
      />
    </div>
  );
}
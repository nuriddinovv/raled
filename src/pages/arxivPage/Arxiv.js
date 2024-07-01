import "./arxiv.css";
export default function Arxiv() {
  return (
    <div className="container arxiv">
      <iframe className="my-4"
        width="100%"
        style={{ height: "50vh" }}
        src="https://www.youtube.com/embed/KxyzqfHeaII?si=J7IJ6BrwABagLT67"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
}

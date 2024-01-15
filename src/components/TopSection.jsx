export default function TopSection({ submitted }) {
  const classCondition =
    document.getElementsByClassName("name-input").length === 0;
  return (
    <div className="top-section">
      <h1 className={submitted && !classCondition ? "second-fade-in" : null}>
        {!submitted || classCondition
          ? "The Legend"
          : "Bir kahraman doğdu. Kahramanın adı: "}
      </h1>
      <div className="image-container">
        <img
          className={!submitted || classCondition ? null : "fade-out-and-in"}
          src={
            !submitted || classCondition
              ? "/images/Character1.png"
              : "/images/Character2.png"
          }
        />
      </div>
    </div>
  );
}

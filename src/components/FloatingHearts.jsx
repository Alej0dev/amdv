function FloatingHearts() {
  const hearts = ["♡", "♥", "♡", "♥", "♡", "♥"];

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden">
      {hearts.map((heart, index) => (
        <span
          key={index}
          className={`
            absolute
            text-pink-400/30
            text-3xl
            heart
            heart-${index + 1}
          `}
        >
          {heart}
        </span>
      ))}
    </div>
  );
}

export default FloatingHearts;
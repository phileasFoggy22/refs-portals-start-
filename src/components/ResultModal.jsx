import { forwardRef, useImperativeHandle, useRef } from "react";
const ResultModal = forwardRef(function ResultModal(
  { remainingTime, targetTime, reset },
  ref,
) {
  const dialog = useRef();
  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return (
    <dialog ref={dialog} className="result-modal" onClose={reset}>
      <h2>
        You {userLost ? "lost" : "won"} the game!{" "}
        {userLost ? "" : "score:" + score}{" "}
      </h2>
      {!userLost && (
        <span>
          <p>
            Your target time was <strong>{targetTime} seconds.</strong>
          </p>
          <p>
            Your stopped the timer with{" "}
            <strong>{formattedRemainingTime} seconds left.</strong>
          </p>
          <p>
            Your score is <strong>{score}</strong> aren't you impressive?
          </p>
        </span>
      )}
      <form method="dialog" onSubmit={reset}>
        <button>OK</button>
      </form>
    </dialog>
  );
});
export default ResultModal;

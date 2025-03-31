import { useState } from "react";

export function TwitterFollowCard({ userName, name }) {
  const [isFollowing, setIsFollowing] = useState(false);

  const imgSrc = `https://unavatar.io/${userName}`;

  const text = isFollowing ? "Siguiendo" : "Seguir";

  const followButtonClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          alt="El avatar de alafresh"
          src={imgSrc}
        />
        <div className="tw-followCard-info">
          <strong> {name} </strong>
          <span className="tw-followCard-infoUserName">@{userName}</span>
        </div>
      </header>
      <aside>
        <button className={followButtonClassName} onClick={handleClick}>
          {text}
        </button>
      </aside>
    </article>
  );
}

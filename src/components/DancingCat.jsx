import { useState } from 'react';
import catImage from '../assets/images/cat.svg';
import '../styles/animations.css';

function DancingCat() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [danceStyle, setDanceStyle] = useState('bounce');

  const danceStyles = [
    { id: 'bounce', name: '점프' },
    { id: 'spin', name: '회전' },
    { id: 'shake', name: '흔들기' },
    { id: 'party', name: '파티' }
  ];

  const toggleAnimation = () => {
    setIsPlaying(!isPlaying);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleAnimation();
    }
  };

  return (
    <div className="dancing-cat-container">
      <h1 className="title">Dancing Cat</h1>

      <div
        className={`cat-wrapper ${isPlaying ? danceStyle : 'paused'}`}
        onClick={toggleAnimation}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        aria-label={isPlaying ? '애니메이션 정지' : '애니메이션 시작'}
      >
        <img
          src={catImage}
          alt="춤추는 고양이"
          className="cat-image"
        />
      </div>

      <div className="controls">
        <button
          className={`control-btn ${isPlaying ? 'playing' : ''}`}
          onClick={toggleAnimation}
          aria-label={isPlaying ? '정지' : '재생'}
        >
          {isPlaying ? '정지' : '재생'}
        </button>

        <div className="dance-style-buttons">
          {danceStyles.map((style) => (
            <button
              key={style.id}
              className={`style-btn ${danceStyle === style.id ? 'active' : ''}`}
              onClick={() => setDanceStyle(style.id)}
              aria-pressed={danceStyle === style.id}
            >
              {style.name}
            </button>
          ))}
        </div>
      </div>

      <p className="hint">고양이를 클릭하면 춤을 멈춥니다</p>
    </div>
  );
}

export default DancingCat;

'use client';

import { useRef, useEffect, useState } from 'react';

interface LoopingAnimationProps {
  src?: string;
  className?: string;
}

export default function LoopingAnimation({ 
  src = '/videos/FullSimulation.mp4',
  className = ''
}: LoopingAnimationProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [error, setError] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Handle video load and play
    const handleLoadedData = () => {
      video.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.error('Video autoplay failed:', err);
          setError('Video autoplay failed. Click to play.');
        });
    };

    // Handle when video starts playing
    const handlePlaying = () => {
      setIsPlaying(true);
    };

    // Handle errors
    const handleError = (e: Event) => {
      console.error('Video error:', e);
      setError('Video failed to load. Please check the file path.');
    };

    // Set up event listeners
    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('playing', handlePlaying);
    video.addEventListener('error', handleError);

    // Force load
    video.load();

    // Cleanup
    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('playing', handlePlaying);
      video.removeEventListener('error', handleError);
    };
  }, [src]);

  // If there's an error, show a message
  if (error) {
    return (
      <div className={`relative w-full h-full flex items-center justify-center ${className}`}>
        <div className="text-center p-8">
          <p className="text-sm text-muted-foreground mb-4">{error}</p>
          <p className="text-xs text-muted-foreground">Expected path: {src}</p>
          <button
            onClick={() => {
              if (videoRef.current) {
                videoRef.current.load();
              }
              setError(null);
            }}
            className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm hover:bg-primary/90"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative w-full h-full ${className}`}>
      <video
        ref={videoRef}
        src={src}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="w-full h-full object-contain"
        style={{
          pointerEvents: 'none',
          minHeight: '100%',
        }}
        onError={(e) => {
          console.error('Video load error:', e);
          setError('Video file not found');
        }}
        onLoadedMetadata={() => {
          // Force play when metadata is loaded
          if (videoRef.current) {
            videoRef.current.play()
              .then(() => setIsPlaying(true))
              .catch((err) => {
                console.error('Play failed:', err);
              });
          }
        }}
        onPlaying={() => setIsPlaying(true)}
      />
      {!error && !isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted/20 animate-pulse z-10">
          <p className="text-sm text-muted-foreground">Loading video...</p>
        </div>
      )}
    </div>
  );
}

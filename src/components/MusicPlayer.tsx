// MusicPlayer component

interface MusicPlayerProps {
    isPlaying: boolean
    onToggle: () => void
}

export const MusicPlayer = ({ isPlaying }: MusicPlayerProps) => {
    // YouTube video ID for "50 Năm Về Sau"
    // Using https://www.youtube.com/watch?v=Sb6pPzitHAc
    const videoId = "Sb6pPzitHAc"
    
    return (
        <div className="hidden">
            <iframe
                width="0"
                height="0"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=${isPlaying ? 1 : 0}&mute=0&loop=1&playlist=${videoId}`}
                title="Background Music"
                allow="autoplay"
                frameBorder="0"
            />
        </div>
    )
}

import {
  ArrowDown,
  Film,
  ListVideo,
  Maximize,
  Minimize,
  Pause,
  Play,
  Volume2,
  VolumeX,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { CSSProperties, KeyboardEvent as ReactKeyboardEvent } from "react";
import { FILM_PLAY_EVENT } from "@/lib/film";
import { cn } from "@/lib/utils";

const CHAPTERS = [
  {
    start: 0,
    time: "00:00",
    label: "平台全景",
    description: "四大业务域一屏贯通",
    image: "images/chapter-overview.jpg",
  },
  {
    start: 12,
    time: "00:12",
    label: "场景生成",
    description: "产品原图 → 场景大片",
    image: "images/chapter-scene.jpg",
  },
  {
    start: 25,
    time: "00:25",
    label: "电子画册",
    description: "多页内容一键编排",
    image: "images/chapter-catalog.jpg",
  },
  {
    start: 42,
    time: "00:42",
    label: "交付与治理",
    description: "工单闭环与企业控制台",
    image: "images/chapter-workbench.jpg",
  },
] as const;

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds) || seconds < 0) return "00:00";
  const minutes = Math.floor(seconds / 60);
  const rest = Math.floor(seconds % 60);
  return `${String(minutes).padStart(2, "0")}:${String(rest).padStart(2, "0")}`;
}

export function VideoShowcase() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const [duration, setDuration] = useState(60);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    const attempt = video.play();
    if (attempt) {
      attempt.catch(() => setIsPlaying(false));
    }
  }, []);

  useEffect(() => {
    const onFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };

    document.addEventListener("fullscreenchange", onFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", onFullscreenChange);
  }, []);

  useEffect(() => {
    const playFromCta = () => {
      const video = videoRef.current;
      if (!video) return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      stageRef.current?.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "center",
      });

      video.muted = false;
      setIsMuted(false);

      const attempt = video.play();
      if (attempt) {
        attempt.catch(() => {
          video.muted = true;
          setIsMuted(true);
          const mutedAttempt = video.play();
          mutedAttempt?.catch(() => setIsPlaying(false));
        });
      }
    };

    window.addEventListener(FILM_PLAY_EVENT, playFromCta);
    return () => window.removeEventListener(FILM_PLAY_EVENT, playFromCta);
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      const attempt = video.play();
      if (attempt) attempt.catch(() => setIsPlaying(false));
    } else {
      video.pause();
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    const nextMuted = !video.muted;
    video.muted = nextMuted;
    if (!nextMuted) video.volume = 1;
    setIsMuted(nextMuted);
  };

  const seekTo = (seconds: number, autoplay = false) => {
    const video = videoRef.current;
    if (!video) return;

    video.currentTime = Math.max(
      0,
      Math.min(seconds, video.duration || seconds),
    );
    setCurrentTime(video.currentTime);

    if (autoplay) {
      const attempt = video.play();
      if (attempt) attempt.catch(() => setIsPlaying(false));
    }
  };

  const toggleFullscreen = async () => {
    const stage = stageRef.current;
    const video = videoRef.current;
    if (!stage || !video) return;

    if (document.fullscreenElement) {
      try {
        await document.exitFullscreen();
      } catch {
        // The browser may have already exited fullscreen.
      }
      return;
    }

    const isIOS =
      /iPad|iPhone|iPod/.test(navigator.userAgent) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
    const nativeVideo = video as HTMLVideoElement & {
      webkitEnterFullscreen?: () => void;
    };

    // iPhone Safari does not support Fullscreen API on arbitrary elements.
    // Use the native video player when available so fullscreen still works.
    if (isIOS && typeof nativeVideo.webkitEnterFullscreen === "function") {
      nativeVideo.webkitEnterFullscreen();
      return;
    }

    if (typeof stage.requestFullscreen === "function") {
      try {
        await stage.requestFullscreen();
        return;
      } catch {
        // Fall through to native video fullscreen.
      }
    }

    if (typeof nativeVideo.webkitEnterFullscreen === "function") {
      nativeVideo.webkitEnterFullscreen();
      return;
    }

    if (typeof video.requestFullscreen === "function") {
      try {
        await video.requestFullscreen();
      } catch {
        // Fullscreen can be unavailable in embedded or restricted contexts.
      }
    }
  };

  const onStageKeyDown = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget) return;

    if (event.key === " " || event.key === "Enter" || event.key === "k") {
      event.preventDefault();
      togglePlay();
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      seekTo(currentTime + 5);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      seekTo(currentTime - 5);
    } else if (event.key === "m") {
      toggleMute();
    } else if (event.key === "f") {
      void toggleFullscreen();
    }
  };

  const activeChapterIndex = CHAPTERS.reduce(
    (active, chapter, index) =>
      currentTime + 0.2 >= chapter.start ? index : active,
    0,
  );
  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="absolute -inset-x-10 -top-6 bottom-8 -z-10 rounded-[56px] bg-[radial-gradient(ellipse_at_center,rgba(101,85,245,0.22),rgba(77,141,255,0.10)_44%,transparent_72%)] blur-2xl"
      />

      <div className="relative rounded-[28px] border border-white/90 bg-white/[0.72] p-1.5 shadow-[0_55px_130px_-52px_rgba(54,48,152,0.55),0_20px_50px_-40px_rgba(31,45,84,0.45)] backdrop-blur-2xl sm:rounded-[36px] sm:p-2.5">
        <div
          ref={stageRef}
          role="region"
          aria-label="研发 AI设计平台介绍影片"
          aria-keyshortcuts="Space ArrowLeft ArrowRight M F"
          tabIndex={0}
          onKeyDown={onStageKeyDown}
          onClick={(event) => {
            if ((event.target as HTMLElement).closest("button, input")) return;
            togglePlay();
          }}
          className="group relative aspect-video cursor-pointer overflow-hidden rounded-[23px] bg-[#070b14] outline-none ring-offset-4 ring-offset-white focus-visible:ring-2 focus-visible:ring-brand/60 sm:rounded-[30px]"
        >
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            poster="images/poster.jpg"
            preload="metadata"
            autoPlay
            loop
            muted
            playsInline
            aria-label="研发 AI设计平台一分钟介绍影片"
            onLoadedMetadata={(event) => {
              const value = event.currentTarget.duration;
              if (Number.isFinite(value) && value > 0) setDuration(value);
            }}
            onTimeUpdate={(event) =>
              setCurrentTime(event.currentTarget.currentTime)
            }
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          >
            <source src="media/rd-ai-intro.mp4" type="video/mp4" />
            您的浏览器暂不支持播放此影片。
          </video>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/45 to-transparent"
          />

          <div className="pointer-events-none absolute left-3 top-3 flex items-center gap-2 rounded-full border border-white/15 bg-black/30 px-3 py-1.5 text-[9px] font-semibold tracking-[0.18em] text-white/80 backdrop-blur-md sm:left-5 sm:top-5 sm:text-[10px]">
            <span className="size-1.5 animate-pulse-dot rounded-full bg-[#b8a9ff]" />
            PLATFORM FILM
            <span className="h-3 w-px bg-white/20" />
            <span className="font-mono font-medium tracking-[0.08em] text-white/55">
              {formatTime(duration)}
            </span>
          </div>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              toggleMute();
            }}
            aria-label={isMuted ? "开启影片声音" : "静音影片"}
            className={cn(
              "absolute right-3 top-3 flex h-8 items-center gap-1.5 rounded-full border px-2.5 text-[10px] font-medium backdrop-blur-md transition-all duration-300 sm:right-5 sm:top-5 sm:h-9 sm:px-3 sm:text-[11px]",
              isMuted
                ? "border-white/25 bg-white/15 text-white shadow-[0_0_0_4px_rgba(255,255,255,0.04)] hover:bg-white/25"
                : "border-white/15 bg-black/30 text-white/70 hover:bg-black/45 hover:text-white",
            )}
          >
            {isMuted ? (
              <VolumeX className="size-3.5" aria-hidden="true" />
            ) : (
              <Volume2 className="size-3.5" aria-hidden="true" />
            )}
            <span>{isMuted ? "开启声音" : "声音已开启"}</span>
          </button>

          {!isPlaying ? (
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_center,rgba(5,8,16,0.12),rgba(5,8,16,0.38))]"
            >
              <span className="flex size-16 items-center justify-center rounded-full border border-white/25 bg-white/15 text-white shadow-[0_20px_50px_-16px_rgba(0,0,0,0.65)] backdrop-blur-md transition-transform duration-500 group-hover:scale-105 sm:size-[76px]">
                <Play
                  className="ml-1 size-6 fill-current sm:size-7"
                  aria-hidden="true"
                />
              </span>
            </div>
          ) : null}

          <div
            onClick={(event) => event.stopPropagation()}
            className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent px-3 pb-2.5 pt-14 sm:px-5 sm:pb-4 sm:pt-20"
          >
            <input
              type="range"
              min={0}
              max={duration || 60}
              step={0.1}
              value={Math.min(currentTime, duration || 60)}
              onChange={(event) => seekTo(Number(event.target.value))}
              aria-label="影片播放进度"
              aria-valuetext={`${formatTime(currentTime)} / ${formatTime(duration)}`}
              className="video-range"
              style={{ "--progress": `${progress}%` } as CSSProperties}
            />

            <div className="mt-1.5 flex items-center gap-1.5 sm:mt-2.5 sm:gap-2.5">
              <button
                type="button"
                onClick={togglePlay}
                aria-label={isPlaying ? "暂停影片" : "播放影片"}
                className="flex size-8 items-center justify-center rounded-full text-white/90 transition-colors hover:bg-white/10 hover:text-white"
              >
                {isPlaying ? (
                  <Pause className="size-4 fill-current" aria-hidden="true" />
                ) : (
                  <Play
                    className="ml-0.5 size-4 fill-current"
                    aria-hidden="true"
                  />
                )}
              </button>

              <span className="font-mono text-[10px] tabular-nums tracking-[0.02em] text-white/60 sm:text-[11px]">
                {formatTime(currentTime)}
                <span className="mx-1 text-white/25">/</span>
                {formatTime(duration)}
              </span>

              <div className="ml-auto flex items-center gap-0.5 sm:gap-1">
                <button
                  type="button"
                  onClick={toggleMute}
                  aria-label={isMuted ? "开启影片声音" : "静音影片"}
                  className="flex size-8 items-center justify-center rounded-full text-white/75 transition-colors hover:bg-white/10 hover:text-white"
                >
                  {isMuted ? (
                    <VolumeX className="size-4" aria-hidden="true" />
                  ) : (
                    <Volume2 className="size-4" aria-hidden="true" />
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => void toggleFullscreen()}
                  aria-label={isFullscreen ? "退出全屏" : "全屏播放"}
                  className="flex size-8 items-center justify-center rounded-full text-white/75 transition-colors hover:bg-white/10 hover:text-white"
                >
                  {isFullscreen ? (
                    <Minimize className="size-4" aria-hidden="true" />
                  ) : (
                    <Maximize className="size-4" aria-hidden="true" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="px-2 pb-2 pt-4 sm:px-3 sm:pb-2.5 sm:pt-5">
          <div className="flex items-center justify-between gap-4 px-1">
            <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              <ListVideo className="size-3.5 text-brand" aria-hidden="true" />
              影片章节
            </span>
            <span className="hidden text-[11px] text-muted-foreground/70 sm:block">
              选择章节，快速定位
            </span>
          </div>

          <div className="mt-3 grid grid-cols-2 gap-1.5 sm:gap-2 lg:grid-cols-4">
            {CHAPTERS.map((chapter, index) => {
              const active = activeChapterIndex === index;
              const chapterProgress =
                active && index < CHAPTERS.length - 1
                  ? Math.min(
                      100,
                      ((currentTime - chapter.start) /
                        (CHAPTERS[index + 1].start - chapter.start)) *
                        100,
                    )
                  : active
                    ? Math.min(
                        100,
                        ((currentTime - chapter.start) /
                          Math.max(duration - chapter.start, 1)) *
                          100,
                      )
                    : 0;

              return (
                <button
                  key={chapter.start}
                  type="button"
                  onClick={() => seekTo(chapter.start, true)}
                  aria-label={`跳转到第 ${index + 1} 章：${chapter.label}，${chapter.time}`}
                  className={cn(
                    "group/chapter flex items-center gap-2 rounded-2xl border p-1.5 text-left transition-all duration-300 sm:gap-3 sm:p-2",
                    active
                      ? "border-brand/20 bg-brand/[0.06] shadow-[inset_0_0_0_1px_rgba(101,85,245,0.04)]"
                      : "border-transparent bg-[#f7f9fd]/80 hover:border-border/80 hover:bg-white",
                  )}
                >
                  <span className="relative aspect-[16/10] w-[55px] shrink-0 overflow-hidden rounded-[10px] bg-[#e8edf6] sm:w-[76px] sm:rounded-xl">
                    <img
                      src={chapter.image}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover/chapter:scale-[1.06]"
                    />
                    <span className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    <span className="absolute bottom-1 left-1 font-mono text-[8px] font-semibold tracking-[0.04em] text-white/90 sm:text-[9px]">
                      {chapter.time}
                    </span>
                    {active ? (
                      <span className="absolute inset-x-1 bottom-1 h-[2px] overflow-hidden rounded-full bg-white/25">
                        <span
                          className="block h-full rounded-full bg-white"
                          style={{ width: `${chapterProgress}%` }}
                        />
                      </span>
                    ) : null}
                  </span>

                  <span className="min-w-0 flex-1 pr-1">
                    <span className="flex items-center gap-1.5">
                      <span
                        className={cn(
                          "truncate text-[12px] font-semibold tracking-[-0.02em] sm:text-[13px]",
                          active ? "text-brand" : "text-ink",
                        )}
                      >
                        {chapter.label}
                      </span>
                      {active ? (
                        <span className="size-1 shrink-0 rounded-full bg-brand" />
                      ) : null}
                    </span>
                    <span className="mt-0.5 hidden truncate text-[10.5px] text-muted-foreground sm:block">
                      {chapter.description}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-5 flex flex-col items-center justify-between gap-3 px-2 text-[11px] text-muted-foreground sm:flex-row">
        <span className="inline-flex items-center gap-2">
          <Film className="size-3.5 text-brand/70" aria-hidden="true" />
          文生场景图 · 图生场景图 · 个人知识库 · 团队知识库
        </span>
        <a
          href="#capabilities"
          className="group inline-flex items-center gap-1.5 rounded-full font-medium text-foreground/60 transition-colors hover:text-ink"
        >
          继续了解核心能力
          <ArrowDown
            className="size-3.5 transition-transform duration-300 group-hover:translate-y-0.5"
            aria-hidden="true"
          />
        </a>
      </div>
    </div>
  );
}

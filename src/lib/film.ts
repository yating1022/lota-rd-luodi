export const FILM_PLAY_EVENT = "rdai:play-film";

export function requestFilmPlayback() {
  window.dispatchEvent(new Event(FILM_PLAY_EVENT));
}

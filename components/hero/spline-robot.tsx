import Spline from '@splinetool/react-spline/next'

const SCENE_URL = 'https://prod.spline.design/fhRFWr5h6pUAtLxO/scene.splinecode'

/**
 * Server Component. `@splinetool/react-spline/next` is an async RSC that
 * preloads the scene on the server, then hydrates the interactive canvas on
 * the client (with its own blurhash loading state). It must be rendered from
 * the server tree — never wrapped in React.lazy inside a client component.
 */
export function SplineRobot() {
  return (
    <div className="spline-robot-canvas relative h-full w-full">
      <Spline scene={SCENE_URL} style={{ width: '100%', height: '100%' }} />
    </div>
  )
}
